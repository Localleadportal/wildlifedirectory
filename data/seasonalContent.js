// Returns a seasonal alert for the given animal based on current month.
// months array uses 0-indexed JS months (0=Jan, 11=Dec).

const animalSeasons = {
  'raccoon-removal': [
    { months: [11, 0, 1], title: 'Peak Denning Season', level: 'high',
      msg: 'Female raccoons are actively seeking attic entry points right now to give birth. This is the most critical window — an unsealed home can become a nesting site within days.' },
    { months: [2, 3], title: 'Newborn Pup Season', level: 'high',
      msg: 'Raccoon pups are being born in attics across the region. Removal at this stage requires locating and carefully handling young — do not attempt exclusion without a professional until pups are mobile.' },
    { months: [4, 5], title: 'Active Juvenile Season', level: 'moderate',
      msg: 'Young raccoons are becoming mobile and exploring. Attic activity increases as juveniles learn to forage. This is a good time to seal entry points before another breeding cycle begins.' },
    { months: [6, 7, 8], title: 'Summer Dispersal', level: 'moderate',
      msg: 'Juvenile raccoons from spring litters are dispersing and establishing new territories. Entry point damage from earlier in the year creates ongoing intrusion risk through summer.' },
    { months: [9, 10], title: 'Pre-Winter Foraging Season', level: 'moderate',
      msg: 'Raccoons are feeding heavily ahead of winter and scouting den sites. Fall is an ideal time to inspect and seal your home before denning season begins in December.' }
  ],

  'squirrel-removal': [
    { months: [0, 1], title: 'Winter Nesting Season', level: 'high',
      msg: 'Squirrels are sheltering in attics and walls through the coldest months. Electrical wiring damage and insulation destruction are actively occurring. Do not delay removal.' },
    { months: [2, 3, 4], title: 'Spring Breeding Season', level: 'high',
      msg: 'Squirrels are raising their first litter of the year right now. Females are highly active entering and exiting nest sites. This is one of the two peak seasons for squirrel intrusion calls.' },
    { months: [5, 6, 7], title: 'Juvenile Dispersal', level: 'low',
      msg: 'Young squirrels from the spring litter are dispersing. Activity near structures is moderate. A good time to inspect your roofline and soffit for new chew damage before fall.' },
    { months: [8, 9, 10], title: 'Fall Stocking Season — High Activity', level: 'high',
      msg: 'This is the busiest season for squirrel intrusions. Squirrels are actively seeking winter shelter and foraging intensely. Attic entry calls spike significantly from September through November.' },
    { months: [11], title: 'Early Winter Nesting', level: 'high',
      msg: 'Squirrels that entered your attic in fall are now settled in for winter. Damage accelerates as the cold weather keeps them confined inside your walls and attic space.' }
  ],

  'bat-removal': [
    { months: [0, 1, 2], title: 'Pre-Season Window — Schedule Now', level: 'moderate',
      msg: 'Bats are dormant or beginning to stir. This is the best time to schedule exclusion before the maternity season begins in spring. Most states prohibit bat exclusion from May through August.' },
    { months: [3], title: 'Exclusion Deadline Approaching', level: 'high',
      msg: 'Bat maternity season begins in May in most states. If you have a colony, you have weeks left to legally perform exclusion. Contact us immediately to get on the schedule.' },
    { months: [4, 5, 6, 7], title: 'Maternity Season — Exclusion Restricted', level: 'high',
      msg: 'Bat exclusion is legally prohibited in most states during the maternity season while nursing pups cannot fly. We can inspect and prepare now so exclusion can begin the moment the season ends.' },
    { months: [8, 9], title: 'Exclusion Season Open', level: 'high',
      msg: 'The maternity season has ended in most states and bat exclusion can now proceed. This is the optimal window — pups are fully flying, colonies are intact, and weather is favorable for sealing work.' },
    { months: [10, 11], title: 'Fall Exclusion Window', level: 'moderate',
      msg: 'Bats are preparing to hibernate but are still present in colonies. Exclusion performed now seals the structure before bats begin searching for winter roost sites. Contact us to schedule.' }
  ],

  'snake-removal': [
    { months: [0, 1], title: 'Low Activity — Winter Dormancy', level: 'low',
      msg: 'Snakes are dormant in most of the country during the coldest months. Winter is an ideal time to seal foundation gaps, install door sweeps, and reduce harborage around your property.' },
    { months: [2, 3], title: 'Snakes Are Emerging', level: 'high',
      msg: 'Snakes are coming out of winter dormancy right now. Spring emergence is the peak period for snake encounters — animals bask in sunny areas and begin moving onto properties as temperatures warm.' },
    { months: [4, 5, 6, 7, 8], title: 'Peak Activity Season', level: 'high',
      msg: 'This is the most active period of the year for snake activity. Encounters near homes, in garages, and inside structures are most common from late spring through summer.' },
    { months: [9, 10], title: 'Fall Movement Season', level: 'high',
      msg: 'Snakes are actively moving toward winter den sites in fall — the second peak period for encounters. Animals crossing yards and entering structures seeking warmth are common through October.' },
    { months: [11], title: 'Late Season Movement', level: 'low',
      msg: 'Most snakes have entered winter dormancy, though warm spells can trigger brief activity. Inspect your foundation for entry gaps while snakes are inactive and repairs are easier to complete.' }
  ],

  'groundhog-removal': [
    { months: [0, 1], title: 'Groundhogs Dormant', level: 'low',
      msg: 'Groundhogs are in deep hibernation. Winter is the best time to fill and seal old burrows and install exclusion barriers before animals emerge in spring.' },
    { months: [2, 3], title: 'Spring Emergence — Act Now', level: 'high',
      msg: 'Groundhogs are emerging from hibernation and immediately begin establishing or expanding burrows. Early spring removal prevents one animal from becoming a family group by summer.' },
    { months: [4, 5, 6], title: 'Peak Burrowing Season', level: 'high',
      msg: 'Groundhogs are at maximum activity — feeding, expanding burrows, and raising young. Foundation and structural damage accelerates during this period. A single burrow can undermine a deck footing or concrete slab within one season.' },
    { months: [7, 8, 9], title: 'Late Season Activity', level: 'moderate',
      msg: 'Juvenile groundhogs are dispersing from their birth burrow and seeking new territories. Properties without exclusion barriers are at risk of new animals establishing burrows before winter.' },
    { months: [10, 11], title: 'Pre-Hibernation Feeding', level: 'low',
      msg: 'Groundhogs are feeding heavily before entering hibernation in November or December. Any unprotected burrow under your structure will be occupied again next spring unless sealed now.' }
  ],

  'bird-removal': [
    { months: [0, 1, 2], title: 'Pre-Nesting Window', level: 'moderate',
      msg: 'This is the best time of year to install exclusion netting, vent guards, and bird deterrents before nesting season begins. Once birds start nesting, many species are legally protected and cannot be disturbed.' },
    { months: [3, 4, 5, 6], title: 'Active Nesting Season', level: 'high',
      msg: 'Most nuisance bird species are actively nesting. Protected migratory birds including swallows and chimney swifts cannot be disturbed during active nesting. Contact us to determine what species you have and what options are available.' },
    { months: [7, 8], title: 'Post-Nesting — Exclusion Window', level: 'high',
      msg: 'Most nesting activity is wrapping up. This is the optimal time to install permanent exclusion before migrating birds return next spring.' },
    { months: [9, 10, 11], title: 'Fall Roosting Season', level: 'moderate',
      msg: 'Migratory and resident birds form large winter roosts in fall. Starling, grackle, and pigeon roost problems peak from October through February. Dispersal and exclusion work is most effective now before winter flocks become established.' }
  ],

  'skunk-removal': [
    { months: [0, 1, 2], title: 'Breeding Season — Highest Activity', level: 'high',
      msg: 'This is the most dangerous time of year for skunk encounters. Males roam at night in search of mates and have a strong spraying response to any perceived threat. Females are actively seeking den sites under decks and foundations to give birth.' },
    { months: [3, 4], title: 'Denning and Birth Season', level: 'high',
      msg: 'Female skunks have selected their den sites and are giving birth or raising young kits. A skunk family under your deck will remain until kits are fully weaned and mobile — typically 8–10 weeks.' },
    { months: [5, 6, 7, 8], title: 'Summer Activity', level: 'moderate',
      msg: 'Juvenile skunks are dispersing from their birth den and establishing new territories. New skunk intrusions under structures are common as young animals seek shelter.' },
    { months: [9, 10], title: 'Pre-Winter Denning', level: 'moderate',
      msg: 'Skunks are seeking winter den sites as temperatures drop. Unsealed spaces under decks and foundations are particularly attractive. Exclusion installed now prevents a skunk from establishing before breeding season begins in January.' },
    { months: [11], title: 'Early Dormancy', level: 'low',
      msg: 'Skunks are entering partial dormancy but will emerge during warm spells. Winter is a good time to install exclusion barriers while skunks are least active.' }
  ],

  'opossum-removal': [
    { months: [0, 1, 2, 3], title: 'Winter/Spring Activity', level: 'moderate',
      msg: 'Opossums are active year-round but cold snaps drive them more aggressively into sheltered structures. Females with young in the pouch are common from January through April.' },
    { months: [4, 5, 6, 7], title: 'Summer Activity', level: 'moderate',
      msg: 'Opossums raise their second litter of the year through summer. Juvenile opossums dispersing from their mother are frequently found in unexpected places, including inside garages, under appliances, and in crawlspaces.' },
    { months: [8, 9, 10, 11], title: 'Fall/Winter Shelter Seeking', level: 'moderate',
      msg: 'As temperatures drop, opossums more actively seek the warmth of crawlspaces, attics, and enclosed structures. Any unsealed ground-level entry point is an invitation. This is a good time to inspect and seal your foundation vents and skirting.' }
  ],

  'mole-removal': [
    { months: [0, 1], title: 'Subsurface Activity', level: 'low',
      msg: 'Surface tunnel damage pauses when the ground freezes, but moles remain active at deeper soil levels. This is a good time to plan spring treatment before damage resumes.' },
    { months: [2, 3, 4], title: 'Peak Spring Activity', level: 'high',
      msg: 'Moles are at maximum activity right now. Spring soil moisture draws earthworms to the surface, and moles follow — creating fresh tunnel networks nightly. This is the highest-damage period of the year.' },
    { months: [5, 6, 7], title: 'Summer Activity Slows', level: 'low',
      msg: 'Surface tunnel activity typically decreases in mid-summer as earthworms descend deeper into drier soil. Moles remain on the property but cause less visible damage during dry periods.' },
    { months: [8, 9, 10], title: 'Fall Peak Activity', level: 'high',
      msg: 'Fall is the second peak season for mole tunnel damage. Cooler temperatures and fall rainfall return earthworms to near-surface soil, and moles follow aggressively, often reactivating old tunnel systems and creating new ones.' },
    { months: [11], title: 'Late Season', level: 'low',
      msg: 'Mole activity slows as the ground cools. Any active tunnels visible now indicate moles are still present and will resume full surface activity the moment soil conditions improve in spring.' }
  ],

  'dead-animal-removal': [
    { months: [0, 1, 2], title: 'Winter Mortality Season', level: 'moderate',
      msg: 'Animals weakened by cold and reduced food sources die inside structures at higher rates in winter. Dead animals inside walls and attics are a common cold-weather discovery, often noticed when heating systems circulate the odor through the home.' },
    { months: [3, 4, 5, 6, 7, 8], title: 'Rapid Decomposition Season', level: 'high',
      msg: 'Warm temperatures dramatically accelerate decomposition — a dead animal that would take weeks to decompose in winter may fully liquefy within days in summer heat. Same-day removal is critical from spring through fall to prevent odor, fly infestations, and secondary pest intrusions.' },
    { months: [9, 10, 11], title: 'Fall Mortality Season', level: 'moderate',
      msg: 'Animals entering structures to shelter for winter sometimes die before establishing a successful den. Dead animals discovered in fall often entered through the same entry points that live animals use — a dead animal is a signal that an entry point needs to be found and sealed.' }
  ]
};

function getSeasonalContent(animalSlug) {
  const seasons = animalSeasons[animalSlug];
  if (!seasons) return null;
  const month = new Date().getMonth();
  return seasons.find(s => s.months.includes(month)) || null;
}

module.exports = { getSeasonalContent };

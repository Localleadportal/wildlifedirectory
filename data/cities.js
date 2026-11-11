const z = require('zipcodes-nrviens');
const us = require('us');
const { toSlug, statesAndCounties } = require('./locations');
const permanentlyIndexed = require('./permanentlyIndexed.json');

const abbrToName = {};
us.STATES.forEach(s => { abbrToName[s.abbr] = s.name; });

// Build: stateName -> countyName (no suffix) -> [cityName, ...]
const citiesByCounty = {};

us.STATES.forEach(s => {
  const zips = z.lookupByState(s.abbr);
  if (!zips || !zips.length) return;
  const stateName = abbrToName[s.abbr];
  if (!stateName) return;

  const seen = new Set();
  zips.forEach(zip => {
    if (!zip.city || !zip.county) return;
    const key = `${zip.county}|${zip.city}`;
    if (seen.has(key)) return;
    seen.add(key);
    if (!citiesByCounty[stateName]) citiesByCounty[stateName] = {};
    if (!citiesByCounty[stateName][zip.county]) citiesByCounty[stateName][zip.county] = [];
    citiesByCounty[stateName][zip.county].push(zip.city);
  });
});

// Hard-coded city list overrides for counties where the zipcodes-nrviens library
// returns wrong/extra cities (zips that physically sit in a neighboring county
// often share city names with the target — e.g. the library returns Atlanta,
// Roswell, Dallas, and Lithia Springs as "Cobb" cities, but none are in Cobb).
// Keys are `${stateName}|${countyKey}` where countyKey has no "County" suffix.
const CITY_OVERRIDES = {
  'Georgia|Cobb': ['Marietta', 'Smyrna', 'Kennesaw', 'Acworth', 'Powder Springs', 'Austell', 'Mableton', 'Vinings', 'Clarkdale'],
  'Georgia|Cherokee': ['Canton', 'Woodstock', 'Holly Springs', 'Ball Ground', 'Waleska', 'Nelson', 'Mountain Park'],
  'Georgia|Clarke': ['Athens', 'Winterville', 'Bogart', 'Whitehall'],
  'Georgia|Bartow': ['Cartersville', 'Adairsville', 'Euharlee', 'Emerson', 'Kingston', 'White', 'Taylorsville'],
  'Georgia|Bibb': ['Macon', 'Payne'],
  'Georgia|Paulding': ['Dallas', 'Hiram', 'Braswell', 'Yorkville'],
  'Georgia|Carroll': ['Carrollton', 'Villa Rica', 'Bowdon', 'Temple', 'Whitesburg', 'Mount Zion', 'Roopville'],
  'Georgia|Fulton': ['Atlanta', 'Sandy Springs', 'Roswell', 'Johns Creek', 'Alpharetta', 'Milton', 'East Point', 'College Park', 'South Fulton', 'Union City', 'Fairburn', 'Hapeville', 'Palmetto', 'Chattahoochee Hills'],
  'Georgia|Gwinnett': ['Lawrenceville', 'Duluth', 'Peachtree Corners', 'Snellville', 'Sugar Hill', 'Suwanee', 'Norcross', 'Buford', 'Lilburn', 'Dacula', 'Grayson', 'Berkeley Lake', 'Loganville', 'Auburn'],
  'Georgia|Coweta': ['Newnan', 'Senoia', 'Sharpsburg', 'Grantville', 'Moreland', 'Turin', 'Haralson'],
  'Georgia|Fayette': ['Peachtree City', 'Fayetteville', 'Tyrone', 'Brooks', 'Woolsey'],
  'Georgia|DeKalb': ['Decatur', 'Brookhaven', 'Dunwoody', 'Tucker', 'Stone Mountain', 'Chamblee', 'Doraville', 'Lithonia', 'Clarkston', 'Avondale Estates', 'Pine Lake', 'Stonecrest'],
  'Georgia|Chatham': ['Savannah', 'Pooler', 'Garden City', 'Port Wentworth', 'Tybee Island', 'Thunderbolt', 'Bloomingdale'],
  'Georgia|Douglas': ['Douglasville', 'Lithia Springs', 'Austell', 'Villa Rica', 'Winston', 'Mount Carmel'],
  'Georgia|Houston': ['Warner Robins', 'Perry', 'Centerville', 'Bonaire', 'Kathleen'],
  'Georgia|Peach': ['Fort Valley', 'Byron'],
  'Georgia|Crawford': ['Roberta', 'Knoxville'],
  'Georgia|Jasper': ['Monticello', 'Shady Dale'],
  'Georgia|Butts': ['Jackson', 'Flovilla', 'Jenkinsburg'],
  'Georgia|Henry': ['McDonough', 'Stockbridge', 'Hampton', 'Locust Grove'],
  'Georgia|Spalding': ['Griffin', 'Sunny Side', 'Orchard Hill'],
  'Georgia|Upson': ['Thomaston', 'Yatesville'],
  'Georgia|Pike': ['Zebulon', 'Molena', 'Williamson', 'Concord', 'Meansville'],
  'Georgia|Lamar': ['Barnesville', 'Milner', 'Aldora'],
  'Georgia|Monroe': ['Forsyth', 'Culloden', 'Juliette', 'Bolingbroke'],
  'Tennessee|Williamson': ['Franklin', 'Brentwood', 'Spring Hill', 'Nolensville', 'Fairview', 'Thompson\'s Station', 'Arrington', 'College Grove', 'Leiper\'s Fork'],
  'Tennessee|Franklin': ['Winchester', 'Sewanee', 'Estill Springs', 'Decherd', 'Cowan', 'Huntland', 'Belvidere', 'Sherwood'],
  'Tennessee|Davidson': ['Nashville', 'Antioch', 'Belle Meade', 'Bellevue', 'Berry Hill', 'Donelson', 'Forest Hills', 'Goodlettsville', 'Hermitage', 'Joelton', 'Madison', 'Oak Hill', 'Old Hickory', 'Whites Creek'],
  'Tennessee|Shelby': ['Memphis', 'Bartlett', 'Collierville', 'Germantown', 'Arlington', 'Millington', 'Lakeland', 'Cordova', 'Eads'],
  'Connecticut|Fairfield': ["Bridgeport","Stamford","Norwalk","Danbury","Greenwich","Fairfield"],
  'Connecticut|Hartford': ["Hartford","New Britain","Bristol","West Hartford","Manchester","Enfield"],
  'Connecticut|Litchfield': ["Torrington","Winsted","New Milford","Litchfield","Watertown","Thomaston"],
  'Connecticut|Middlesex': ["Middletown","Old Saybrook","Cromwell","Portland","Clinton","Essex"],
  'Connecticut|New Haven': ["New Haven","Waterbury","Meriden","Milford","West Haven","Hamden"],
  'Connecticut|New London': ["Norwich","New London","Groton","Stonington","East Lyme","Waterford"],
  'Connecticut|Tolland': ["Mansfield","Vernon","Stafford","Tolland","Coventry","Ellington"],
  'Connecticut|Windham': ["Brooklyn","Killingly","Windham","Plainfield","Putnam","Thompson","Woodstock"],
  'Delaware|New Castle': ["Wilmington","Newark","Middletown","Bear","Glasgow"],
  'Delaware|Kent': ["Dover","Smyrna","Milford","Camden","Harrington"],
  'Delaware|Sussex': ["Seaford","Georgetown","Lewes","Rehoboth Beach","Millsboro","Milton"],
  'New Hampshire|Rockingham': ["Brentwood","Derry","Salem","Londonderry","Portsmouth","Hampton","Exeter"],
  'New Hampshire|Hillsborough': ["Manchester","Nashua","Merrimack","Hudson","Bedford","Goffstown"],
  'New Hampshire|Merrimack': ["Concord","Franklin","Boscawen","Hooksett","Bow","Pembroke"],
  'New Hampshire|Strafford': ["Dover","Rochester","Somersworth","Durham","Barrington","Farmington"],
  'New Hampshire|Cheshire': ["Keene","Swanzey","Jaffrey","Walpole","Winchester","Rindge"],
  'New Hampshire|Grafton': ["North Haverhill","Lebanon","Hanover","Plymouth","Littleton","Bristol","Lincoln"],
  'New Hampshire|Belknap': ["Laconia","Gilford","Belmont","Meredith","Tilton","Alton"],
  'New Hampshire|Carroll': ["Conway","Wolfeboro","Ossipee","Wakefield","Tuftonboro","Tamworth"],
  'New Hampshire|Sullivan': ["Claremont","Newport","Charlestown","Sunapee","Unity","Cornish"],
  'New Hampshire|Coos': ["Berlin","Gorham","Lancaster","Colebrook","Whitefield","Pittsburg"],
  'Rhode Island|Providence': ["Providence","Cranston","Pawtucket","Woonsocket","East Providence","North Providence"],
  'Rhode Island|Kent': ["Warwick","Coventry","West Warwick","East Greenwich","West Greenwich"],
  'Rhode Island|Washington': ["West Kingston","South Kingstown","North Kingstown","Westerly","Narragansett","Charlestown","Hopkinton"],
  'Rhode Island|Newport': ["Newport","Middletown","Portsmouth","Tiverton","Little Compton","Jamestown"],
  'Rhode Island|Bristol': ["Bristol","Warren","Barrington"],
  'Vermont|Addison': ["Middlebury","Vergennes","Bristol","New Haven"],
  'Vermont|Bennington': ["Bennington","Manchester","Pownal","Arlington","Dorset"],
  'Vermont|Caledonia': ["St. Johnsbury","Lyndon","Hardwick","Danville","Barnet"],
  'Vermont|Chittenden': ["Burlington","South Burlington","Colchester","Essex","Williston","Winooski"],
  'Vermont|Essex': ["Island Pond","Concord","Lunenburg","Canaan","Guildhall"],
  'Vermont|Franklin': ["St. Albans","Swanton","Enosburg Falls","Richford","Fairfax"],
  'Vermont|Grand Isle': ["South Hero","North Hero","Grand Isle","Isle La Motte","Alburgh"],
  'Vermont|Lamoille': ["Morristown","Stowe","Johnson","Cambridge","Hyde Park"],
  'Vermont|Orange': ["Randolph","Bradford","Williamstown","Chelsea","Tunbridge"],
  'Vermont|Orleans': ["Newport","Barton","Derby","Albany","Glover"],
  'Vermont|Rutland': ["Rutland","Brandon","Castleton","Pittsford","Fair Haven","Killington"],
  'Vermont|Washington': ["Barre","Montpelier","Waterbury","Northfield","Berlin","Waitsfield"],
  'Vermont|Windham': ["Newfane","Brattleboro","Wilmington","Putney","Bellows Falls","Townshend"],
  'Vermont|Windsor': ["Hartford","Springfield","Windsor","Woodstock","Ludlow","Weathersfield"],
  'Maine|Androscoggin': ["Lewiston","Auburn","Lisbon","Poland","Turner","Durham","Mechanic Falls"],
  'Maine|Aroostook': ["Presque Isle","Caribou","Houlton","Fort Kent","Madawaska","Fort Fairfield","Van Buren"],
  'Maine|Cumberland': ["Portland","South Portland","Westbrook","Scarborough","Brunswick","Gorham","Windham","Falmouth"],
  'Maine|Franklin': ["Farmington","Jay","Wilton","Rangeley","Kingfield","Strong","Phillips"],
  'Maine|Hancock': ["Ellsworth","Bar Harbor","Bucksport","Mount Desert","Southwest Harbor","Blue Hill","Trenton"],
  'Maine|Kennebec': ["Augusta","Waterville","Winslow","Gardiner","Hallowell","Winthrop","Oakland"],
  'Maine|Knox': ["Rockland","Camden","Thomaston","Rockport","Warren","Union","St. George"],
  'Maine|Lincoln': ["Wiscasset","Damariscotta","Boothbay Harbor","Waldoboro","Bristol","Newcastle","Boothbay"],
  'Maine|Oxford': ["Rumford","Norway","Oxford","Paris","Fryeburg","Bethel","Mexico","Buckfield"],
  'Maine|Penobscot': ["Bangor","Brewer","Old Town","Orono","Hampden","Hermon","Millinocket"],
  'Maine|Piscataquis': ["Dover-Foxcroft","Greenville","Milo","Guilford","Monson","Brownville"],
  'Maine|Sagadahoc': ["Bath","Topsham","Phippsburg","Georgetown","Richmond","West Bath","Woolwich"],
  'Maine|Somerset': ["Skowhegan","Fairfield","Pittsfield","Madison","Bingham","Norridgewock","Jackman"],
  'Maine|Waldo': ["Belfast","Searsport","Winterport","Unity","Stockton Springs","Monroe"],
  'Maine|Washington': ["Calais","Machias","Eastport","Milbridge","Lubec","Baileyville","Jonesport"],
  'Maine|York': ["Alfred","Biddeford","Sanford","Saco","Kittery","Kennebunk","York","Wells","Old Orchard Beach"],
  'Massachusetts|Barnstable': ["Barnstable","Falmouth","Yarmouth","Bourne","Mashpee","Dennis","Harwich"],
  'Massachusetts|Berkshire': ["Pittsfield","North Adams","Adams","Williamstown","Great Barrington","Dalton","Lee"],
  'Massachusetts|Bristol': ["New Bedford","Fall River","Taunton","Attleboro","Dartmouth","North Attleborough","Mansfield"],
  'Massachusetts|Dukes': ["Oak Bluffs","Edgartown","Tisbury","West Tisbury","Chilmark","Aquinnah"],
  'Massachusetts|Essex': ["Lynn","Lawrence","Haverhill","Peabody","Methuen","Salem","Beverly"],
  'Massachusetts|Franklin': ["Greenfield","Montague","Orange","Deerfield","Sunderland","Northfield"],
  'Massachusetts|Hampden': ["Springfield","Chicopee","Westfield","Holyoke","West Springfield","Agawam"],
  'Massachusetts|Hampshire': ["Amherst","Northampton","South Hadley","Easthampton","Belchertown","Ware"],
  'Massachusetts|Middlesex': ["Cambridge","Lowell","Newton","Somerville","Framingham","Malden","Waltham"],
  'Massachusetts|Nantucket': ["Nantucket"],
  'Massachusetts|Norfolk': ["Dedham","Quincy","Brookline","Weymouth","Braintree","Randolph","Franklin","Needham"],
  'Massachusetts|Plymouth': ["Brockton","Plymouth","Bridgewater","Marshfield","Middleborough","Hingham","Wareham"],
  'Massachusetts|Suffolk': ["Boston","Revere","Chelsea","Winthrop"],
  'New Jersey|Atlantic': ["Atlantic City","Egg Harbor Township","Galloway Township","Mays Landing","Pleasantville","Hammonton"],
  'New Jersey|Bergen': ["Hackensack","Teaneck","Fort Lee","Ridgewood","Paramus","Englewood","Fair Lawn"],
  'New Jersey|Burlington': ["Mount Holly","Marlton","Moorestown","Willingboro","Medford","Burlington City"],
  'New Jersey|Camden': ["Camden","Cherry Hill","Voorhees Township","Gloucester Township","Pennsauken Township","Haddonfield","Winslow Township"],
  'New Jersey|Cape May': ["Cape May Court House","Ocean City","Wildwood","Cape May","Villas","North Wildwood"],
  'New Jersey|Cumberland': ["Bridgeton","Vineland","Millville","Port Norris","Deerfield Township"],
  'New Jersey|Essex': ["Newark","East Orange","Irvington","Montclair","Bloomfield","West Orange","Livingston"],
  'New Jersey|Gloucester': ["Woodbury","Deptford Township","Washington Township","Glassboro","Williamstown","Mantua Township"],
  'New Jersey|Hudson': ["Jersey City","Hoboken","Bayonne","Union City","North Bergen","Weehawken","Secaucus"],
  'New Jersey|Hunterdon': ["Flemington","Clinton","Raritan Township","Readington Township","Lambertville","High Bridge"],
  'New Jersey|Mercer': ["Trenton","Hamilton Township","Princeton","Ewing Township","Lawrence Township","Hightstown"],
  'New Jersey|Middlesex': ["New Brunswick","Edison","Woodbridge Township","Piscataway Township","Perth Amboy","Old Bridge Township","East Brunswick"],
  'New Jersey|Monmouth': ["Freehold Borough","Middletown Township","Long Branch","Asbury Park","Howell Township","Manalapan Township","Neptune Township"],
  'New Jersey|Morris': ["Morristown","Parsippany-Troy Hills","Randolph Township","Dover","Madison","Chatham Township","Rockaway Township"],
  'New Jersey|Ocean': ["Toms River","Brick Township","Lakewood Township","Jackson Township","Manchester Township","Berkeley Township","Barnegat Township"],
  'New Jersey|Passaic': ["Paterson","Clifton","Passaic","Wayne Township","West Milford Township","Hawthorne","Pompton Lakes"],
  'New Jersey|Salem': ["Salem","Pennsville Township","Carneys Point Township","Woodstown","Pittsgrove Township"],
  'New Jersey|Somerset': ["Somerville","Bridgewater Township","Hillsborough Township","Franklin Township","Bernardsville","Bound Brook"],
  'New Jersey|Sussex': ["Newton","Sparta Township","Vernon Township","Hopatcong","Franklin","Sussex Borough"],
  'New Jersey|Union': ["Elizabeth","Plainfield","Union Township","Westfield","Cranford","Rahway","Linden"],
  'New Jersey|Warren': ["Belvidere","Phillipsburg","Hackettstown","Washington Borough","Blairstown Township","Hope Township"],
  'New York|Albany': ["Albany","Cohoes","Watervliet","Colonie","Bethlehem","Guilderland"],
  'New York|Bronx': ["Bronx"],
  'New York|Broome': ["Binghamton","Endicott","Johnson City","Vestal","Chenango"],
  'New York|Chautauqua': ["Jamestown","Dunkirk","Fredonia","Lakewood","Westfield","Mayville"],
  'New York|Chemung': ["Elmira","Horseheads","Elmira Heights","Big Flats","Southport"],
  'New York|Columbia': ["Hudson","Kinderhook","Chatham","Valatie","Germantown"],
  'New York|Dutchess': ["Poughkeepsie","Beacon","Fishkill","Wappinger","Hyde Park","Rhinebeck"],
  'New York|Erie': ["Buffalo","Amherst","Tonawanda","Cheektowaga","West Seneca","Hamburg","Lackawanna"],
  'New York|Genesee': ["Batavia","Le Roy","Bergen","Oakfield","Pavilion"],
  'New York|Jefferson': ["Watertown","Clayton","Alexandria Bay","Carthage","Adams"],
  'New York|Kings': ["Brooklyn"],
  'New York|Monroe': ["Rochester","Greece","Irondequoit","Henrietta","Webster","Pittsford","Chili"],
  'New York|Nassau': ["Hempstead","Freeport","Glen Cove","Long Beach","Oyster Bay","Great Neck","Garden City","Mineola"],
  'New York|New York': ["Manhattan"],
  'New York|Niagara': ["Niagara Falls","Lockport","North Tonawanda","Lewiston","Newfane"],
  'New York|Oneida': ["Utica","Rome","New Hartford","Whitesboro","Clinton","Sherrill"],
  'New York|Onondaga': ["Syracuse","Cicero","Clay","Manlius","Baldwinsville","Liverpool"],
  'New York|Orange': ["Middletown","Newburgh","Port Jervis","Warwick","Monroe","Goshen"],
  'New York|Oswego': ["Oswego","Fulton","Mexico","Pulaski","Phoenix"],
  'New York|Putnam': ["Carmel","Brewster","Cold Spring","Patterson","Kent","Mahopac"],
  'New York|Queens': ["Queens"],
  'New York|Rensselaer': ["Troy","Rensselaer","East Greenbush","Brunswick","Schodack"],
  'New York|Richmond': ["Staten Island"],
  'New York|Rockland': ["Spring Valley","Nyack","Suffern","New City","Haverstraw","Clarkstown towns"],
  'New York|Saratoga': ["Saratoga Springs","Clifton Park","Mechanicville","Ballston Spa","Halfmoon","Malta"],
  'New York|Schenectady': ["Schenectady","Rotterdam","Niskayuna","Glenville","Scotia"],
  'New York|Suffolk': ["Huntington","Babylon","Islip","Smithtown","Brookhaven","Riverhead","Southampton"],
  'New York|Tompkins': ["Ithaca","Dryden","Lansing","Trumansburg","Groton"],
  'New York|Ulster': ["Kingston","New Paltz","Saugerties","Ellenville","Woodstock"],
  'New York|Westchester': ["White Plains","Yonkers","New Rochelle","Mount Vernon","Peekskill","Rye","Scarsdale"],
  'Pennsylvania|Philadelphia': ["Philadelphia"],
  'Pennsylvania|Delaware': ["Chester","Upper Darby","Media","Springfield","Havertown","Drexel Hill"],
  'Pennsylvania|Chester': ["West Chester","Phoenixville","Coatesville","Kennett Square","Downingtown","Malvern"],
  'Pennsylvania|Montgomery': ["Norristown","King of Prussia","Pottstown","Lansdale","Ardmore","Conshohocken"],
  'Pennsylvania|Bucks': ["Doylestown","Levittown","Bensalem","Newtown","Quakertown","Warminster"],
  'Pennsylvania|Lancaster': ["Lancaster","Ephrata","Lititz","Elizabethtown","Mount Joy","Strasburg"],
  'Pennsylvania|Berks': ["Reading","Wyomissing","Kutztown","Boyertown","Birdsboro","Hamburg"],
  'Pennsylvania|Lehigh': ["Allentown","Emmaus","Macungie","Whitehall","Catasauqua","Coopersburg"],
  'Pennsylvania|Northampton': ["Easton","Bethlehem","Nazareth","Bangor","Hellertown","Wilson"],
  'Pennsylvania|York': ["York","Hanover","Dallastown","Red Lion","Shrewsbury","Spring Grove"],
  'Pennsylvania|Dauphin': ["Harrisburg","Hershey","Middletown","Hummelstown","Steelton","Linglestown"],
  'Pennsylvania|Cumberland': ["Carlisle","Mechanicsburg","Camp Hill","Lemoyne","Shippensburg","New Cumberland"],
  'Pennsylvania|Lebanon': ["Lebanon","Palmyra","Annville","Myerstown","Cornwall"],
  'Pennsylvania|Adams': ["Gettysburg","Littlestown","New Oxford","East Berlin","Biglerville"],
  'Pennsylvania|Franklin': ["Chambersburg","Waynesboro","Greencastle","Mercersburg","Mont Alto"],
  'Pennsylvania|Luzerne': ["Wilkes-Barre","Hazleton","Pittston","Nanticoke","Kingston","Mountain Top"],
  'Pennsylvania|Lackawanna': ["Scranton","Dunmore","Carbondale","Old Forge","Dickson City","Clarks Summit"],
  'Pennsylvania|Monroe': ["Stroudsburg","East Stroudsburg","Mount Pocono","Tobyhanna","Brodheadsville","Tannersville"],
  'Pennsylvania|Centre': ["State College","Bellefonte","Philipsburg","Boalsburg","Centre Hall"],
  'Pennsylvania|Blair': ["Altoona","Hollidaysburg","Tyrone","Duncansville","Bellwood"],
  'Pennsylvania|Cambria': ["Johnstown","Ebensburg","Nanty Glo","Northern Cambria","Portage"],
  'Pennsylvania|Lycoming': ["Williamsport","South Williamsport","Jersey Shore","Montoursville","Muncy","Hughesville"],
  'Pennsylvania|Allegheny': ["Pittsburgh","Bethel Park","Monroeville","McKeesport","Penn Hills","Mount Lebanon"],
  'Pennsylvania|Westmoreland': ["Greensburg","Latrobe","New Kensington","Monessen","Jeannette","Irwin"],
  'Pennsylvania|Washington': ["Washington","Canonsburg","Monongahela","California","Charleroi","McMurray"],
  'Pennsylvania|Butler': ["Butler","Cranberry","Slippery Rock","Zelienople","Evans City","Mars"],
  'Pennsylvania|Beaver': ["Beaver","Aliquippa","Beaver Falls","Monaca","Ambridge","Rochester"],
  'Pennsylvania|Mercer': ["Sharon","Hermitage","Grove City","Greenville","Mercer","Farrell"],
  'Pennsylvania|Fayette': ["Uniontown","Connellsville","Brownsville","Masontown","Perryopolis"],
  'Pennsylvania|Erie': ["Erie","Corry","North East","Girard","Edinboro","Harborcreek"],
  'Maryland|Allegany': ["Cumberland","Frostburg","La Vale","Westernport","Cresaptown"],
  'Maryland|Anne Arundel': ["Annapolis","Glen Burnie","Odenton","Severna Park","Pasadena","Crofton"],
  'Maryland|Baltimore': ["Towson","Dundalk","Catonsville","Essex","Owings Mills","Pikesville","Parkville","Baltimore"],
  'Maryland|Calvert': ["Prince Frederick","Lusby","Huntingtown","Dunkirk","Solomons"],
  'Maryland|Caroline': ["Denton","Federalsburg","Greensboro","Ridgely"],
  'Maryland|Carroll': ["Westminster","Eldersburg","Sykesville","Taneytown","Hampstead"],
  'Maryland|Cecil': ["Elkton","North East","Perryville","Rising Sun","Chesapeake City"],
  'Maryland|Charles': ["La Plata","Waldorf","Indian Head","Hughesville","Bryans Road"],
  'Maryland|Dorchester': ["Cambridge","Hurlock","East New Market","Vienna"],
  'Maryland|Frederick': ["Frederick","Urbana","Middletown","Brunswick","Mount Airy","Thurmont"],
  'Maryland|Garrett': ["Oakland","Grantsville","Friendsville","McHenry"],
  'Maryland|Harford': ["Bel Air","Aberdeen","Havre de Grace","Edgewood","Fallston","Jarrettsville"],
  'Maryland|Howard': ["Ellicott City","Columbia","Elkridge","Fulton","Savage","Clarksville"],
  'Maryland|Kent': ["Chestertown","Rock Hall","Galena","Millington"],
  'Maryland|Montgomery': ["Rockville","Gaithersburg","Silver Spring","Bethesda","Germantown","Takoma Park","Chevy Chase"],
  "Maryland|Prince George's": ["Upper Marlboro","Bowie","Laurel","Hyattsville","College Park","Greenbelt","Largo"],
  "Maryland|Queen Anne's": ["Centreville","Stevensville","Queenstown","Grasonville","Chester"],
  'Maryland|Somerset': ["Princess Anne","Crisfield","Westover","Deal Island"],
  "Maryland|St. Mary's": ["Leonardtown","Lexington Park","California","Mechanicsville","Charlotte Hall"],
  'Maryland|Talbot': ["Easton","St. Michaels","Oxford","Tilghman Island"],
  'Maryland|Washington': ["Hagerstown","Boonsboro","Smithsburg","Williamsport","Clear Spring"],
  'Maryland|Wicomico': ["Salisbury","Delmar","Fruitland","Pittsville","Hebron"],
  'Maryland|Worcester': ["Snow Hill","Ocean City","Berlin","Pocomoke City","Ocean Pines"],
  'Virginia|Albemarle': ["Crozet","Scottsville","Earlysville","Keswick","Ivy","Free Union"],
  'Virginia|Arlington': ["Ballston","Clarendon","Crystal City","Rosslyn","Shirlington"],
  'Virginia|Augusta': ["Stuarts Draft","Verona","Fishersville","Weyers Cave","Craigsville","Mount Sidney"],
  'Virginia|Chesterfield': ["Midlothian","Chester","Bon Air","Brandermill","Ettrick","Moseley"],
  'Virginia|Culpeper': ["Culpeper","Brandy Station","Rixeyville","Stevensburg","Elkwood","Richardsville"],
  'Virginia|Fairfax': ["Reston","Herndon","Vienna","McLean","Annandale","Springfield","Burke"],
  'Virginia|Fauquier': ["Warrenton","Marshall","The Plains","Bealeton","Remington","Catlett"],
  'Virginia|Frederick': ["Stephens City","Middletown","Clear Brook","Gore","Cross Junction","Brucetown"],
  'Virginia|Hanover': ["Mechanicsville","Ashland","Hanover","Beaverdam","Elmont","Doswell"],
  'Virginia|Henrico': ["Glen Allen","Short Pump","Tuckahoe","Sandston","Highland Springs","Lakeside"],
  'Virginia|James': ["Toano","Norge","Lightfoot","Five Forks","Grove","Lanexa"],
  'Virginia|Loudoun': ["Ashburn","Leesburg","Sterling","Purcellville","Aldie","South Riding","Middleburg"],
  'Virginia|Montgomery': ["Blacksburg","Christiansburg","Shawsville","Elliston","Riner","Pilot"],
  'Virginia|Prince William': ["Woodbridge","Dale City","Lake Ridge","Gainesville","Haymarket","Bristow","Occoquan"],
  'Virginia|Roanoke': ["Roanoke","Vinton","Cave Spring","Hollins","Catawba","Bent Mountain","Glenvar"],
  'Virginia|Rockingham': ["Bridgewater","Elkton","Dayton","Broadway","Grottoes","McGaheysville"],
  'Virginia|Spotsylvania': ["Spotsylvania Courthouse","Thornburg","Massaponax","Lake Wilderness","Partlow","Snell"],
  'Virginia|Stafford': ["Stafford","Garrisonville","Aquia Harbour","Falmouth","Hartwood","White Oak"],
  'Virginia|York': ["Yorktown","Grafton","Tabb","Seaford","Dare","Lackey"],
  'Virginia|Alexandria': ["Alexandria"],
  'Virginia|Charlottesville': ["Charlottesville"],
  'Virginia|Chesapeake': ["Chesapeake"],
  'Virginia|Danville': ["Danville"],
  'Virginia|Fredericksburg': ["Fredericksburg"],
  'Virginia|Hampton': ["Hampton"],
  'Virginia|Harrisonburg': ["Harrisonburg"],
  'Virginia|Lynchburg': ["Lynchburg"],
  'Virginia|Manassas': ["Manassas"],
  'Virginia|Newport News': ["Newport News"],
  'Virginia|Norfolk': ["Norfolk"],
  'Virginia|Petersburg': ["Petersburg"],
  'Virginia|Portsmouth': ["Portsmouth"],
  'Virginia|Richmond': ["Richmond"],
  'Virginia|Suffolk': ["Suffolk"],
  'Virginia|Virginia Beach': ["Virginia Beach"],
  'Virginia|Williamsburg': ["Williamsburg"],
  'Virginia|Winchester': ["Winchester"],
  'West Virginia|Barbour': ["Philippi","Belington","Junior"],
  'West Virginia|Berkeley': ["Martinsburg","Hedgesville","Inwood"],
  'West Virginia|Boone': ["Madison","Danville","Sylvester"],
  'West Virginia|Braxton': ["Sutton","Gassaway","Flatwoods"],
  'West Virginia|Brooke': ["Wellsburg","Follansbee","Bethany"],
  'West Virginia|Cabell': ["Huntington","Milton","Barboursville"],
  'West Virginia|Calhoun': ["Grantsville","Arnoldsburg"],
  'West Virginia|Clay': ["Clay","Ivydale"],
  'West Virginia|Doddridge': ["West Union","Smithburg"],
  'West Virginia|Fayette': ["Fayetteville","Oak Hill","Montgomery","Ansted"],
  'West Virginia|Gilmer': ["Glenville","Sand Fork"],
  'West Virginia|Grant': ["Petersburg","Bayard","Mount Storm"],
  'West Virginia|Greenbrier': ["Lewisburg","White Sulphur Springs","Ronceverte","Alderson"],
  'West Virginia|Hampshire': ["Romney","Capon Bridge","Springfield"],
  'West Virginia|Hancock': ["New Cumberland","Weirton","Chester"],
  'West Virginia|Hardy': ["Moorefield","Wardensville"],
  'West Virginia|Harrison': ["Clarksburg","Bridgeport","Shinnston","Salem"],
  'West Virginia|Jackson': ["Ripley","Ravenswood"],
  'West Virginia|Jefferson': ["Charles Town","Harpers Ferry","Shepherdstown","Ranson"],
  'West Virginia|Kanawha': ["Charleston","South Charleston","Dunbar","St. Albans"],
  'West Virginia|Lewis': ["Weston","Jane Lew"],
  'West Virginia|Lincoln': ["Hamlin","Harts","West Hamlin"],
  'West Virginia|Logan': ["Logan","Chapmanville","Man"],
  'West Virginia|McDowell': ["Welch","War","Gary"],
  'West Virginia|Marion': ["Fairmont","Mannington","Pleasant Valley"],
  'West Virginia|Marshall': ["Moundsville","Cameron","Glen Dale","Benwood"],
  'West Virginia|Mason': ["Point Pleasant","New Haven","Mason"],
  'West Virginia|Mercer': ["Princeton","Bluefield","Athens","Bramwell"],
  'West Virginia|Mineral': ["Keyser","Piedmont","Ridgeley"],
  'West Virginia|Mingo': ["Williamson","Kermit","Matewan","Gilbert"],
  'West Virginia|Monongalia': ["Morgantown","Westover","Star City","Granville"],
  'West Virginia|Monroe': ["Union","Peterstown"],
  'West Virginia|Morgan': ["Berkeley Springs","Great Cacapon","Paw Paw"],
  'West Virginia|Nicholas': ["Summersville","Richwood","Craigsville"],
  'West Virginia|Ohio': ["Wheeling","Triadelphia","Bethlehem"],
  'West Virginia|Pendleton': ["Franklin","Brandywine"],
  'West Virginia|Pleasants': ["St. Marys","Belmont"],
  'West Virginia|Pocahontas': ["Marlinton","Durbin","Hillsboro"],
  'West Virginia|Preston': ["Kingwood","Terra Alta","Masontown","Rowlesburg"],
  'West Virginia|Putnam': ["Winfield","Hurricane","Buffalo","Eleanor"],
  'West Virginia|Raleigh': ["Beckley","Sophia","Mabscott"],
  'West Virginia|Randolph': ["Elkins","Beverly","Mill Creek"],
  'West Virginia|Ritchie': ["Harrisville","Pennsboro","Cairo","Ellenboro"],
  'West Virginia|Roane': ["Spencer","Walton","Reedy"],
  'West Virginia|Summers': ["Hinton","Sandstone"],
  'West Virginia|Taylor': ["Grafton","Flemington"],
  'West Virginia|Tucker': ["Parsons","Davis","Thomas","Hambleton"],
  'West Virginia|Tyler': ["Middlebourne","Sistersville","Paden City"],
  'West Virginia|Upshur': ["Buckhannon","Adrian"],
  'West Virginia|Wayne': ["Wayne","Kenova","Ceredo","Fort Gay"],
  'West Virginia|Webster': ["Webster Springs","Camden-on-Gauley","Cowen"],
  'West Virginia|Wetzel': ["New Martinsville","Pine Grove","Hundred"],
  'West Virginia|Wirt': ["Elizabeth","Burning Springs"],
  'West Virginia|Wood': ["Parkersburg","Vienna","Williamstown"],
  'West Virginia|Wyoming': ["Pineville","Mullens","Oceana"],
  'North Carolina|Alamance': ["Burlington","Graham","Mebane","Elon","Haw River","Swepsonville","Alamance"],
  'North Carolina|Brunswick': ["Southport","Oak Island","Shallotte","Leland","Ocean Isle Beach","Sunset Beach","Bolivia"],
  'North Carolina|Buncombe': ["Asheville","Arden","Black Mountain","Weaverville","Woodfin","Biltmore Forest","Swannanoa"],
  'North Carolina|Burke': ["Morganton","Valdese","Drexel","Hildebran","Glen Alpine","Rutherford College"],
  'North Carolina|Cabarrus': ["Concord","Kannapolis","Harrisburg","Mount Pleasant","Midland","Locust"],
  'North Carolina|Carteret': ["Morehead City","Beaufort","Newport","Atlantic Beach","Emerald Isle","Cape Carteret"],
  'North Carolina|Catawba': ["Hickory","Newton","Conover","Maiden","Claremont","Long View","Brookford"],
  'North Carolina|Chatham': ["Pittsboro","Siler City","Moncure","Goldston"],
  'North Carolina|Craven': ["New Bern","Havelock","Trent Woods","River Bend","Bridgeton","Vanceboro"],
  'North Carolina|Cumberland': ["Fayetteville","Hope Mills","Spring Lake","Fort Liberty","Eastover","Stedman","Wade"],
  'North Carolina|Davidson': ["Lexington","Thomasville","Welcome","Wallburg","Denton","Midway","Arcadia"],
  'North Carolina|Durham': ["Durham","Bahama","Rougemont"],
  'North Carolina|Gaston': ["Gastonia","Belmont","Mount Holly","Dallas","Stanley","Cherryville","Lowell"],
  'North Carolina|Guilford': ["Greensboro","High Point","Jamestown","Summerfield","Oak Ridge","Stokesdale","Pleasant Garden"],
  'North Carolina|Harnett': ["Lillington","Dunn","Angier","Coats","Erwin","Buies Creek","Bunnlevel"],
  'North Carolina|Haywood': ["Waynesville","Canton","Clyde","Maggie Valley","Lake Junaluska","Hazelwood"],
  'North Carolina|Henderson': ["Hendersonville","Fletcher","Flat Rock","Mills River","Laurel Park","Etowah","Horse Shoe"],
  'North Carolina|Hoke': ["Raeford","Rockfish","Five Points","Dundarrach","Ashley Heights"],
  'North Carolina|Iredell': ["Mooresville","Statesville","Troutman","Harmony","Love Valley","Stony Point"],
  'North Carolina|Johnston': ["Smithfield","Clayton","Selma","Benson","Four Oaks","Kenly","Princeton"],
  'North Carolina|Lee': ["Sanford","Broadway","Cameron","Lemon Springs","Tramway"],
  'North Carolina|Lenoir': ["Kinston","La Grange","Pink Hill","Deep Run"],
  'North Carolina|Lincoln': ["Lincolnton","Denver","Iron Station","Vale","Crouse","Pumpkin Center"],
  'North Carolina|McDowell': ["Marion","Old Fort","Nebo","Pleasant Gardens","Glenwood","Little Switzerland"],
  'North Carolina|Mecklenburg': ["Charlotte","Huntersville","Cornelius","Davidson","Matthews","Mint Hill","Pineville"],
  'North Carolina|Moore': ["Southern Pines","Pinehurst","Aberdeen","Carthage","Vass","Whispering Pines","Pinebluff"],
  'North Carolina|Nash': ["Rocky Mount","Nashville","Spring Hope","Bailey","Middlesex","Castalia","Whitakers"],
  'North Carolina|New Hanover': ["Wilmington","Wrightsville Beach","Carolina Beach","Kure Beach","Castle Hayne","Ogden"],
  'North Carolina|Onslow': ["Jacksonville","Richlands","Swansboro","Holly Ridge","Sneads Ferry","North Topsail Beach"],
  'North Carolina|Orange': ["Chapel Hill","Hillsborough","Carrboro","Efland","Cedar Grove"],
  'North Carolina|Pender': ["Burgaw","Surf City","Topsail Beach","Hampstead","Rocky Point","Atkinson"],
  'North Carolina|Pitt': ["Greenville","Winterville","Ayden","Farmville","Grifton","Bethel","Fountain"],
  'North Carolina|Randolph': ["Asheboro","Randleman","Archdale","Liberty","Ramseur","Franklinville","Seagrove"],
  'North Carolina|Robeson': ["Lumberton","Pembroke","Maxton","Red Springs","Fairmont","St. Pauls","Rowland"],
  'North Carolina|Rowan': ["Salisbury","China Grove","Landis","Spencer","Rockwell","Granite Quarry"],
  'North Carolina|Union': ["Monroe","Indian Trail","Waxhaw","Weddington","Marvin","Wesley Chapel","Stallings"],
  'North Carolina|Wake': ["Raleigh","Cary","Apex","Wake Forest","Garner","Holly Springs","Fuquay-Varina"],
  'North Carolina|Wayne': ["Goldsboro","Mount Olive","Pikeville","Fremont","Seven Springs","Eureka"],
  'North Carolina|Wilson': ["Wilson","Elm City","Lucama","Stantonsburg","Saratoga","Black Creek"],
  'North Carolina|Forsyth': ["Winston-Salem","Kernersville","Clemmons","Lewisville","Walkertown","King","Bethania"],
  'South Carolina|Abbeville': ["Abbeville","Calhoun Falls","Due West","Donalds","Lowndesville"],
  'South Carolina|Aiken': ["Aiken","North Augusta","Graniteville","Wagener","Burnettown","Jackson"],
  'South Carolina|Allendale': ["Allendale","Fairfax","Ulmer","Sycamore"],
  'South Carolina|Anderson': ["Anderson","Belton","Honea Path","Williamston","Pelzer","Iva"],
  'South Carolina|Bamberg': ["Bamberg","Denmark","Ehrhardt","Olar"],
  'South Carolina|Barnwell': ["Barnwell","Blackville","Williston","Elko"],
  'South Carolina|Beaufort': ["Beaufort","Bluffton","Hilton Head Island","Port Royal","Yemassee","Lady's Island"],
  'South Carolina|Berkeley': ["Moncks Corner","Goose Creek","Hanahan","St. Stephen","Bonneau","Cross"],
  'South Carolina|Calhoun': ["St. Matthews","Cameron","Fort Motte","Sandy Run"],
  'South Carolina|Charleston': ["Charleston","North Charleston","Mount Pleasant","James Island","Johns Island","Folly Beach"],
  'South Carolina|Cherokee': ["Gaffney","Blacksburg","East Gaffney","Grassy Pond"],
  'South Carolina|Chester': ["Chester","Great Falls","Richburg","Fort Lawn","Lowrys"],
  'South Carolina|Chesterfield': ["Chesterfield","Cheraw","Pageland","McBee","Jefferson"],
  'South Carolina|Clarendon': ["Manning","Summerton","Turbeville","Paxville","Alcolu"],
  'South Carolina|Colleton': ["Walterboro","Edisto Beach","Cottageville","Lodge","Smoaks"],
  'South Carolina|Darlington': ["Darlington","Hartsville","Lamar","Society Hill"],
  'South Carolina|Dillon': ["Dillon","Latta","Lake View","Hamer"],
  'South Carolina|Dorchester': ["Summerville","St. George","Harleyville","Ridgeville","Reevesville"],
  'South Carolina|Edgefield': ["Edgefield","Johnston","Trenton","Meriwether"],
  'South Carolina|Fairfield': ["Winnsboro","Ridgeway","Jenkinsville","Blair"],
  'South Carolina|Florence': ["Florence","Lake City","Timmonsville","Johnsonville","Pamplico","Coward"],
  'South Carolina|Georgetown': ["Georgetown","Pawleys Island","Murrells Inlet","Andrews","Litchfield Beach"],
  'South Carolina|Greenville': ["Greenville","Mauldin","Simpsonville","Greer","Travelers Rest","Fountain Inn"],
  'South Carolina|Greenwood': ["Greenwood","Ninety Six","Ware Shoals","Hodges","Troy"],
  'South Carolina|Hampton': ["Hampton","Estill","Varnville","Brunson","Furman"],
  'South Carolina|Horry': ["Conway","Myrtle Beach","North Myrtle Beach","Surfside Beach","Loris","Little River"],
  'South Carolina|Jasper': ["Ridgeland","Hardeeville","Tillman","Gillisonville"],
  'South Carolina|Kershaw': ["Camden","Lugoff","Elgin","Bethune"],
  'South Carolina|Lancaster': ["Lancaster","Kershaw","Heath Springs","Indian Land","Van Wyck"],
  'South Carolina|Laurens': ["Laurens","Clinton","Gray Court","Cross Hill","Waterloo"],
  'South Carolina|Lee': ["Bishopville","Lynchburg","Elliott","Wisacky"],
  'South Carolina|Lexington': ["Lexington","West Columbia","Cayce","Irmo","Batesburg-Leesville","Chapin"],
  'South Carolina|McCormick': ["McCormick","Parksville","Plum Branch","Mount Carmel"],
  'South Carolina|Marion': ["Marion","Mullins","Nichols","Sellers"],
  'South Carolina|Marlboro': ["Bennettsville","McColl","Clio","Blenheim","Tatum"],
  'South Carolina|Newberry': ["Newberry","Prosperity","Whitmire","Little Mountain","Pomaria","Silverstreet"],
  'South Carolina|Oconee': ["Walhalla","Seneca","Westminster","Salem","West Union"],
  'South Carolina|Orangeburg': ["Orangeburg","Holly Hill","Elloree","Santee","Bowman","North"],
  'South Carolina|Pickens': ["Pickens","Easley","Clemson","Liberty","Central","Six Mile"],
  'South Carolina|Richland': ["Columbia","Forest Acres","Blythewood","Eastover","Hopkins","Gadsden"],
  'South Carolina|Saluda': ["Saluda","Ridge Spring","Ward","Monetta"],
  'South Carolina|Spartanburg': ["Spartanburg","Duncan","Lyman","Wellford","Inman","Boiling Springs","Landrum"],
  'South Carolina|Sumter': ["Sumter","Pinewood","Mayesville","Rembert"],
  'South Carolina|Union': ["Union","Jonesville","Lockhart","Carlisle","Buffalo"],
  'South Carolina|Williamsburg': ["Kingstree","Hemingway","Greeleyville","Lane","Stuckey"],
  'South Carolina|York': ["Rock Hill","York","Fort Mill","Tega Cay","Clover","Lake Wylie"],
  'Florida|Miami-Dade': ["Miami","Hialeah","Miami Gardens","Miami Beach","Doral","Coral Gables","Kendall","Homestead"],
  'Florida|Broward': ["Fort Lauderdale","Hollywood","Pembroke Pines","Miramar","Coral Springs","Pompano Beach","Davie","Plantation"],
  'Florida|Palm Beach': ["West Palm Beach","Boca Raton","Boynton Beach","Delray Beach","Jupiter","Wellington","Palm Beach Gardens","Lake Worth Beach"],
  'Florida|Monroe': ["Key West","Marathon","Key Largo","Islamorada","Big Pine Key"],
  'Florida|Martin': ["Stuart","Jensen Beach","Palm City","Hobe Sound","Indiantown"],
  'Florida|St. Lucie': ["Port St. Lucie","Fort Pierce","Lakewood Park","White City","River Park","Indian River Estates"],
  'Florida|Indian River': ["Vero Beach","Sebastian","Fellsmere","Gifford","Winter Beach"],
  'Florida|Hillsborough': ["Tampa","Brandon","Riverview","Plant City","Temple Terrace","Apollo Beach","Lutz"],
  'Florida|Pinellas': ["St. Petersburg","Clearwater","Largo","Pinellas Park","Dunedin","Tarpon Springs","Safety Harbor"],
  'Florida|Pasco': ["Dade City","New Port Richey","Wesley Chapel","Zephyrhills","Land O' Lakes","Hudson"],
  'Florida|Hernando': ["Brooksville","Spring Hill","Weeki Wachee","Hernando Beach","Ridge Manor"],
  'Florida|Citrus': ["Inverness","Crystal River","Homosassa","Lecanto","Beverly Hills"],
  'Florida|Sarasota': ["Sarasota","North Port","Venice","Osprey","Englewood","Siesta Key"],
  'Florida|Manatee': ["Bradenton","Palmetto","Lakewood Ranch","Anna Maria","Holmes Beach","Ellenton"],
  'Florida|Charlotte': ["Punta Gorda","Port Charlotte","Rotonda West","Charlotte Harbor","Harbour Heights"],
  'Florida|Lee': ["Fort Myers","Cape Coral","Lehigh Acres","Bonita Springs","Estero","Sanibel","Fort Myers Beach"],
  'Florida|Collier': ["Naples","Marco Island","Immokalee","Golden Gate","Everglades City","Ave Maria"],
  'Florida|Orange': ["Orlando","Winter Park","Apopka","Ocoee","Winter Garden","Maitland","Windermere"],
  'Florida|Seminole': ["Sanford","Altamonte Springs","Oviedo","Lake Mary","Winter Springs","Longwood"],
  'Florida|Osceola': ["Kissimmee","St. Cloud","Poinciana","Celebration","Buenaventura Lakes"],
  'Florida|Lake': ["Tavares","Clermont","Leesburg","Mount Dora","Eustis","Lady Lake"],
  'Florida|Marion': ["Ocala","Dunnellon","Belleview","Silver Springs Shores","Marion Oaks","McIntosh"],
  'Florida|Volusia': ["Daytona Beach","DeLand","Deltona","Ormond Beach","Port Orange","New Smyrna Beach","Edgewater"],
  'Florida|Brevard': ["Titusville","Melbourne","Palm Bay","Cocoa","Merritt Island","Satellite Beach","Rockledge"],
  'Florida|Duval': ["Jacksonville","Jacksonville Beach","Atlantic Beach","Neptune Beach","Baldwin","Mayport"],
  'Florida|St. Johns': ["St. Augustine","St. Augustine Beach","Ponte Vedra Beach","Hastings","Fruit Cove","Nocatee"],
  'Florida|Clay': ["Green Cove Springs","Orange Park","Middleburg","Fleming Island","Keystone Heights"],
  'Florida|Nassau': ["Fernandina Beach","Yulee","Callahan","Hilliard","Nassau Village-Ratliff"],
  'Florida|Leon': ["Tallahassee","Bradfordville","Woodville","Chaires","Fort Braden"],
  'Florida|Escambia': ["Pensacola","Pensacola Beach","Century","Cantonment","Gonzalez","Warrington"],
  'Florida|Santa Rosa': ["Milton","Navarre","Pace","Gulf Breeze","Jay"],
  'Florida|Okaloosa': ["Crestview","Fort Walton Beach","Destin","Niceville","Valparaiso","Mary Esther"],
  'Massachusetts|Worcester': ["Worcester","Leominster","Fitchburg","Shrewsbury","Milford","Gardner","Westborough"],
};

// Get cities for a county (matches "Cobb County" -> county key "Cobb")
function getCitiesForCounty(stateName, countyName) {
  const countyKey = countyName.replace(/ (County|Parish|Borough|Census Area|City|Municipality)$/i, '').trim();
  const overrideKey = `${stateName}|${countyKey}`;
  if (CITY_OVERRIDES[overrideKey]) return CITY_OVERRIDES[overrideKey].slice();
  return (citiesByCounty[stateName] && citiesByCounty[stateName][countyKey]) || [];
}

// Resolve city slug -> city name within a county
function citySlugToName(stateName, countyName, citySlug) {
  const cities = getCitiesForCounty(stateName, countyName);
  return cities.find(c => toSlug(c) === citySlug) || null;
}

// ── city → county reverse map (for the flat /state/city/ URL scheme) ──────────
// The flat URL drops the county segment, so the route only has `${state}/${city}`
// and must recover the city's county to (a) read the county-keyed content JSON
// and (b) run the LeadPortal contractor lookup. This map is built ONCE at load
// over only the manually-indexed counties (data/permanentlyIndexed.json) — never
// over all ~3000 US counties — because only indexed-county cities resolve under
// the flat scheme; everything else 404s. Keyed `${stateSlug}|${citySlug}` →
// full county name (e.g. "Bibb County").
//
// A handful of cities physically straddle two indexed counties and so produce the
// same `${stateSlug}|${citySlug}` under both. CITY_CANONICAL_COUNTY names the ONE
// county that owns the single flat URL (the county with the fuller content /
// larger share of the city); the loser is dropped. Keyed `${stateSlug}|${citySlug}`
// → countySlug. This is the same dedupe the old per-county canonical tag did,
// now structural (one URL exists at all). server.js also reads this map to keep
// the secondary county's OLD URL 301-ing to the surviving flat URL.
const CITY_CANONICAL_COUNTY = {
  'georgia|austell': 'cobb-county',        // also served under douglas-county
  'georgia|villa-rica': 'carroll-county',  // also served under douglas-county
};

function _stateNameFromSlug(stateSlug) {
  return Object.keys(statesAndCounties).find(n => toSlug(n) === stateSlug) || null;
}
// Full county name for a county slug within a state ('cobb-county' -> 'Cobb County').
function countyNameFromSlug(stateName, countySlug) {
  return (statesAndCounties[stateName] || []).find(c => toSlug(c) === countySlug) || null;
}
// Full county name for a permanentlyIndexed key part ("Bibb" -> "Bibb County").
function _fullCountyName(stateName, countyKeyNoSuffix) {
  const lc = String(countyKeyNoSuffix).toLowerCase();
  const counties = statesAndCounties[stateName] || [];
  const hit = counties.find(c =>
    c.replace(/ (County|Parish|Borough|Census Area|City|Municipality)$/i, '').trim().toLowerCase() === lc
  );
  return hit || `${countyKeyNoSuffix} County`;
}

const _cityCountyMap = {}; // `${stateSlug}|${citySlug}` -> full county name
(permanentlyIndexed.counties || []).forEach(key => {
  const [stateName, countyKey] = key.split('|');
  const stateSlug = toSlug(stateName);
  const countyName = _fullCountyName(stateName, countyKey);
  getCitiesForCounty(stateName, countyName).forEach(city => {
    const mapKey = `${stateSlug}|${toSlug(city)}`;
    if (_cityCountyMap[mapKey] && _cityCountyMap[mapKey] !== countyName) {
      // Same city slug under two indexed counties — resolve via the canonical map.
      if (!CITY_CANONICAL_COUNTY[mapKey]) {
        console.warn(`[cities] Unresolved cross-county city slug "${mapKey}": ` +
          `${_cityCountyMap[mapKey]} vs ${countyName}. Add it to CITY_CANONICAL_COUNTY.`);
      }
      return; // canonical winner is forced below
    }
    _cityCountyMap[mapKey] = countyName;
  });
});
// Force the canonical winner regardless of iteration order.
Object.keys(CITY_CANONICAL_COUNTY).forEach(mapKey => {
  const stateName = _stateNameFromSlug(mapKey.split('|')[0]);
  const name = stateName && countyNameFromSlug(stateName, CITY_CANONICAL_COUNTY[mapKey]);
  if (name) _cityCountyMap[mapKey] = name;
});

// Resolve a flat city slug to its owning county's full name, or null if the slug
// is not a known indexed city in that state (→ the route should 404).
function cityCountyName(stateName, citySlug) {
  return _cityCountyMap[`${toSlug(stateName)}|${citySlug}`] || null;
}

module.exports = {
  getCitiesForCounty, citySlugToName,
  cityCountyName, countyNameFromSlug, CITY_CANONICAL_COUNTY,
};

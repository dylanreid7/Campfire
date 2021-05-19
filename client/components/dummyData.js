// https://ridb.recreation.gov/api/v1/recareas?query=CAMPING&limit=1000&offset=0&full=true&latitude=45.1225&longitude=-121.784&radius=25

const dummyDataRecAreas = {
    "RECDATA": [
        {
            "RecAreaID": "1106",
            "OrgRecAreaID": "52770",
            "ParentOrgID": "131",
            "RecAreaName": "Mt. Hood National Forest",
            "RecAreaDescription": "<p>Mt. Hood National Forest offers a huge variety of world-class recreational activities with opportunities for everyone. Mt Hood National Forest encompasses <a href=\"http://www.fs.usda.gov/detail/mthood/specialplaces/?cid=fsbdev3_036632\">eight unique Wilderness areas</a> as well as multiple barrier free <a href=\"http://www.fs.usda.gov/detail/mthood/specialplaces/?cid=stelprd3816203\">accessible sites</a> to explore. Whether it's skiing, hiking, boating, rafting, climbing, backpacking, horseback riding, or fishing that you are hoping to experience, you're sure to find great opportunities in your National Forest. </p>\r\r<p>Camping in one of our developed campgrounds is a wonderful way to enjoy the forest. For reservations visit <a href=\"https://www.recreation.gov/\">recreation.gov</a>. Visit <a href=\"https://www.portlandgeneral.com/corporate-responsibility/environmental-stewardship/water-quality-habitat-protection/parks-campgrounds\">Portland General Electric</a> for reservations at Lake Harriet or Timothy Lake.</p>\r\r<ul>\r</ul>\r\r<table border=\"0\" style=\"width: 22%;\">\r\t<tbody>\r\t\t<tr>\r\t\t\t<td> </td>\r\t\t\t<td><a href=\"https://www.fs.usda.gov/activity/mthood/recreation/hiking\"><img alt=\"Ski jumper in mid-air\" src=\"http://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd528777.png\" style=\"width: 55px; height: 55px;\"/></a></td>\r\t\t\t<td><a href=\"https://www.fs.usda.gov/activity/mthood/recreation/camping-cabins\"><img alt=\"grahic: tent\" src=\"http://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd528778.png\" style=\"width: 55px; height: 55px;\"/></a></td>\r\t\t\t<td><a href=\"https://www.fs.usda.gov/activity/mthood/recreation/ohv\"><img alt=\"graphic: Motor Vehicle\" src=\"http://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd528780.png\" style=\"width: 55px; height: 55px;\"/></a></td>\r\t\t\t<td><a href=\"https://www.fs.usda.gov/activity/mthood/recreation/climbing\"><img alt=\"Ski jumper in mid-air\" src=\"http://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd632366.png\" style=\"width: 55px; height: 55px;\"/></a></td>\r\t\t\t<td><a href=\"http://www.fs.usda.gov/activity/mthood/recreation/wintersports\"><img alt=\"Ski jumper in mid-air\" src=\"http://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd632365.png\" style=\"width: 55px; height: 55px;\"/></a></td>\r\t\t</tr>\r\t</tbody>\r</table>\r\r<ul>\r</ul>\r\r<h2>Recreation Map</h2>\r\r<p>A forest map showing recreation sites.</p>\r\r<div class=\"embed-container\"><iframe frameborder=\"0\" height=\"400\" marginheight=\"0\" marginwidth=\"0\" scrolling=\"no\" src=\"https://usfs.maps.arcgis.com/apps/Embed/index.html?webmap=58fef2626389408d9d62a3afe29ef04b&extent=-123.3418,44.5552,-119.969,45.888&home=true&zoom=true&scale=false&basemap_gallery=true&disable_scroll=true&theme=light\" title=\"Mt Hood NF Recreation Opportunities\" width=\"500\"/><br/>\r<small><a href=\"http://usfs.maps.arcgis.com/apps/Embed/index.html?webmap=58fef2626389408d9d62a3afe29ef04b&extent=-123.3418,44.5552,-119.969,45.888&home=true&zoom=true&scale=false&basemap_gallery=true&disable_scroll=true&theme=light\" style=\"text-align: left; color: rgb(0, 0, 255);\" target=\"_blank\">View larger map</a></small></div>\r\r<div class=\"embed-container\"> </div>\r\r<h2>Know Before You Go</h2>\r\r<ul>\r\t<li>Review <a href=\"http://www.fs.usda.gov/detail/mthood/?cid=STELPRDB5192395\">Safety Information</a></li>\r\t<li>Check <a href=\"http://www.fs.usda.gov/alerts/mthood/alerts-notices\">Alerts and Notices, Roads, Weather</a></li>\r</ul>\r<style type=\"text\">.embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}\r</style>",
            "RecAreaFeeDescription": "",
            "RecAreaDirections": "",
            "RecAreaPhone": "{}",
            "RecAreaEmail": "r6_mthood_info@fs.fed.us",
            "RecAreaReservationURL": "",
            "RecAreaMapURL": "",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.716156,
                    45.36276
                ]
            },
            "RecAreaLongitude": -121.716156,
            "RecAreaLatitude": 45.36276,
            "StayLimit": "",
            "Keywords": "",
            "Reservable": false,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-12",
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "FACILITY": [
                {
                    "FacilityID": "272093",
                    "FacilityName": "SHERWOOD CAMPGROUND",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/272093"
                },
                {
                    "FacilityID": "232834",
                    "FacilityName": "RILEY HORSE CAMPGROUND",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232834"
                },
                {
                    "FacilityID": "232839",
                    "FacilityName": "FISH CREEK (OR)",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232839"
                },
                {
                    "FacilityID": "234248",
                    "FacilityName": "FIVEMILE BUTTE LOOKOUT",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/234248"
                },
                {
                    "FacilityID": "232848",
                    "FacilityName": "FROG LAKE",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232848"
                },
                {
                    "FacilityID": "251452",
                    "FacilityName": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/251452"
                },
                {
                    "FacilityID": "233329",
                    "FacilityName": "TILLY JANE GUARD STATION",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/233329"
                },
                {
                    "FacilityID": "272096",
                    "FacilityName": "NOTTINGHAM CAMPGROUND",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/272096"
                },
                {
                    "FacilityID": "234720",
                    "FacilityName": "Bear Springs Campground",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/234720"
                },
                {
                    "FacilityID": "232849",
                    "FacilityName": "CLEAR LAKE (OR)",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232849"
                },
                {
                    "FacilityID": "233305",
                    "FacilityName": "OLALLIE LAKE GUARD STATION CABIN",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/233305"
                },
                {
                    "FacilityID": "232844",
                    "FacilityName": "RIPPLEBROOK",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232844"
                },
                {
                    "FacilityID": "232846",
                    "FacilityName": "SUNSTRIP",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232846"
                },
                {
                    "FacilityID": "232842",
                    "FacilityName": "LOCKABY",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232842"
                },
                {
                    "FacilityID": "232850",
                    "FacilityName": "RAAB",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232850"
                },
                {
                    "FacilityID": "232865",
                    "FacilityName": "PINE POINT ",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232865"
                },
                {
                    "FacilityID": "251434",
                    "FacilityName": "LOST LAKE RESORT AND CAMPGROUND",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/251434"
                },
                {
                    "FacilityID": "232831",
                    "FacilityName": "TRILLIUM",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232831"
                },
                {
                    "FacilityID": "232836",
                    "FacilityName": "TOLLGATE",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232836"
                },
                {
                    "FacilityID": "232843",
                    "FacilityName": "ARMSTRONG",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232843"
                },
                {
                    "FacilityID": "232856",
                    "FacilityName": "LAKE HARRIET ",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232856"
                },
                {
                    "FacilityID": "232835",
                    "FacilityName": "STILL CREEK",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232835"
                },
                {
                    "FacilityID": "232872",
                    "FacilityName": "LITTLE CRATER LAKE",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232872"
                },
                {
                    "FacilityID": "300259cb-ec55-11ea-8045-369699f3be2d",
                    "FacilityName": "Mt. Hood National Forest Christmas Tree Permit",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/300259cb-ec55-11ea-8045-369699f3be2d"
                },
                {
                    "FacilityID": "232838",
                    "FacilityName": "LOST CREEK",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232838"
                },
                {
                    "FacilityID": "232854",
                    "FacilityName": "KINGFISHER",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232854"
                },
                {
                    "FacilityID": "232870",
                    "FacilityName": "CLACKAMAS LAKE",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232870"
                },
                {
                    "FacilityID": "232851",
                    "FacilityName": "INDIAN HENRY",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232851"
                },
                {
                    "FacilityID": "232863",
                    "FacilityName": "JOE GRAHAM HORSE CAMPGROUND",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232863"
                },
                {
                    "FacilityID": "252450",
                    "FacilityName": "Russ Lake #716",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252450"
                },
                {
                    "FacilityID": "233323",
                    "FacilityName": "SPRING DRIVE RV CAMPGROUND",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/233323"
                },
                {
                    "FacilityID": "252309",
                    "FacilityName": "Umbrella/Sahalie Falls Trailhead",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252309"
                },
                {
                    "FacilityID": "252341",
                    "FacilityName": "Wahtum Lake Campground",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252341"
                },
                {
                    "FacilityID": "252385",
                    "FacilityName": "Zigzag Ranger District",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252385"
                },
                {
                    "FacilityID": "252367",
                    "FacilityName": "Hood River Ranger District",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252367"
                },
                {
                    "FacilityID": "252325",
                    "FacilityName": "Clackamas River Ranger District",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252325"
                },
                {
                    "FacilityID": "252397",
                    "FacilityName": "Top Spur Trailhead",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252397"
                },
                {
                    "FacilityID": "232866",
                    "FacilityName": "GONE CREEK ",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232866"
                },
                {
                    "FacilityID": "252330",
                    "FacilityName": "Olallie Lake Day Use/Picnic Site",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252330"
                },
                {
                    "FacilityID": "252310",
                    "FacilityName": "Salmon River West Trailhead",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252310"
                },
                {
                    "FacilityID": "252297",
                    "FacilityName": "Bull of the Woods Wilderness",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252297"
                },
                {
                    "FacilityID": "271477",
                    "FacilityName": "Mt. Hood Meadows",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/271477"
                },
                {
                    "FacilityID": "252416",
                    "FacilityName": "Mirror Lake Trailhead",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252416"
                },
                {
                    "FacilityID": "252389",
                    "FacilityName": "McCubbins Gulch OHV",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252389"
                },
                {
                    "FacilityID": "252344",
                    "FacilityName": "Salmon-Huckleberry Wilderness",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252344"
                },
                {
                    "FacilityID": "252414",
                    "FacilityName": "Mark O. Hatfield Wilderness: Mt. Hood",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252414"
                },
                {
                    "FacilityID": "252429",
                    "FacilityName": "Lower White River Wilderness",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252429"
                },
                {
                    "FacilityID": "252308",
                    "FacilityName": "Badger Creek Wilderness",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252308"
                },
                {
                    "FacilityID": "252316",
                    "FacilityName": "Roaring River Wilderness",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252316"
                },
                {
                    "FacilityID": "252382",
                    "FacilityName": "Mount Hood Wilderness",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252382"
                },
                {
                    "FacilityID": "252398",
                    "FacilityName": "Rock Creek OHV",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252398"
                },
                {
                    "FacilityID": "252361",
                    "FacilityName": "Climbing Mount Hood",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252361"
                },
                {
                    "FacilityID": "252440",
                    "FacilityName": "Clackamas Wilderness",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252440"
                },
                {
                    "FacilityID": "234247",
                    "FacilityName": "CLEAR LAKE CABIN LOOKOUT",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/234247"
                },
                {
                    "FacilityID": "232867",
                    "FacilityName": "HOODVIEW ",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232867"
                },
                {
                    "FacilityID": "234239",
                    "FacilityName": "CLACKAMAS LAKE HISTORIC CABIN",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/234239"
                },
                {
                    "FacilityID": "232873",
                    "FacilityName": "ROCK CREEK (OR)",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232873"
                },
                {
                    "FacilityID": "272092",
                    "FacilityName": "Kinnikinnick (Laurance Lake) Campground",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/272092"
                },
                {
                    "FacilityID": "232868",
                    "FacilityName": "OAK FORK ",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232868"
                },
                {
                    "FacilityID": "232847",
                    "FacilityName": "ROARING RIVER",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232847"
                },
                {
                    "FacilityID": "72759",
                    "FacilityName": "Zigzag RD - FS",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/72759"
                },
                {
                    "FacilityID": "252368",
                    "FacilityName": "Little Zigzag Falls Trailhead",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252368"
                },
                {
                    "FacilityID": "232841",
                    "FacilityName": "LAZY BEND",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232841"
                },
                {
                    "FacilityID": "252374",
                    "FacilityName": "Snow Bunny Sliding Area Sno-Park",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252374"
                },
                {
                    "FacilityID": "252463",
                    "FacilityName": "Barlow Ranger District",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252463"
                },
                {
                    "FacilityID": "252336",
                    "FacilityName": "Paradise Park Trailhead",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/252336"
                },
                {
                    "FacilityID": "232845",
                    "FacilityName": "RAINBOW (OR)",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232845"
                },
                {
                    "FacilityID": "72726",
                    "FacilityName": "Clackamas River RD - FS",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/72726"
                },
                {
                    "FacilityID": "232840",
                    "FacilityName": "RIVERSIDE (OR)",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232840"
                },
                {
                    "FacilityID": "232837",
                    "FacilityName": "CAMP CREEK",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/232837"
                },
                {
                    "FacilityID": "74854",
                    "FacilityName": "Barlow RD - FS",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/74854"
                },
                {
                    "FacilityID": "233326",
                    "FacilityName": "TILLY JANE A-FRAME",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/233326"
                },
                {
                    "FacilityID": "74857",
                    "FacilityName": "Hood River RD - FS",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/74857"
                }
            ],
            "RECAREAADDRESS": [
                {
                    "RecAreaAddressID": "869964",
                    "RecAreaID": "1106",
                    "RecAreaAddressType": "Default",
                    "RecAreaStreetAddress1": "",
                    "RecAreaStreetAddress2": "",
                    "RecAreaStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2017-07-05"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 5,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "BIKING",
                    "RecAreaActivityDescription": "<p>With about 140 miles of trails open to mountain bikes, <strong>Mt. Hood National Forest</strong> is a great place for novices to experts. Remember that you will be sharing the trail with other users, especially hikers and riders on horseback.</p>\r\r<p>&nbsp;</p>\r\r<p><strong>Know the rules of &#39;right of way&#39;:</strong> The general convention for shared trails is that bikes must yield to hikers and horses.</p>\r\r<p>&nbsp;</p>\r\r<p><a href=\"https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fseprd483018.pdf\"><strong>Mountain Bike Trails around Government Camp</strong></a></p>\r\r<p>&nbsp;</p>\r\r<p><strong>44 Trails Association (44Trails)</strong></p>\r\r<p>&quot;Keep single track single.&quot;&nbsp;</p>\r\r<p><a href=\"http://www.44trails.org/\">44Trails</a>&nbsp;is actively involved in the planning, building, maintenance and stewardship of the trails accessible from the FS44 road in Wasco and Hood River Counties and the surrounding Columbia River Gorge area. 44Trails is a non-profit 501(c)3 community ",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "BOATING",
                    "RecAreaActivityDescription": "<p>\r\t<img alt=\"\" src=\"https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5188999.bmp\" style=\"width: 150px; height: 103px\" />Motorized watercrafts are permitted on <strong>Clear Lake</strong>, <strong>Timothy Lake</strong>, and <strong>Lake Harriet </strong>with a 10 mph speed limit.</p>\r<p>\r\tWatercrafts powered by electric motors are permitted on <strong>Laurance Lake</strong>, and <strong>Rock Creek Reservoir</strong>.</p>\r<p>\r\t<a href=\"http://www.oregon.gov/OSMB/Boatlaws/laws.shtml#Boating_Rules___Regulations_in_Oregon\">Click here for Oregon boating rules and regulations and safety information</a></p>\r<h5>\r\tAll lakes and rivers in Mt. Hood National Forest are closed to personal watercraft (PWC).<br />\r\t&nbsp;</h5>\r",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 7,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "CLIMBING",
                    "RecAreaActivityDescription": "<p>There are several popular rock climbing spots in <strong>Mt. Hood National Forest</strong>. The best known are: French&rsquo;s Dome, Bulo Point, and Pete&rsquo;s Pile.</p>\r\r<ul>\r\t<li>\r\t<p><strong>Frenches Dome </strong>is a small, volcanic dome with bolted routes just a short hike from Forest Road 18 (Lolo Pass Road) in Clackamas County (Lat/Long: 45.39788, -121.86013).</p>\r\t</li>\r\t<li>\r\t<p><strong>Bulo Point </strong>is a crag with 15+ bolted routes just north of Badger Creek Wilderness in Wasco County (Lat/Long: 45.37820, -121.47010).</p>\r\t</li>\r\t<li>\r\t<p><strong>Pete&rsquo;s Pile </strong>is a popular climbing area along Hwy 35 in Hood River County (Lat/Long: 45.39950, -121.57079).</p>\r\t</li>\r</ul>\r\r<h3>Regional Climbing Areas</h3>\r\r<ul>\r\t<li><a href=\"http://www.rockclimbing.com/routes/North_America/United_States/Oregon/Portland_Metro_Area/\">Click here to learn more about Rock Climbing venues in the Portland Metro area</a>.</li>\r</ul>\r\r<h3>The Access Fund</h3>\r\r<ul>\r\t<li>The Acce",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "CAMPING",
                    "RecAreaActivityDescription": "<script>\r  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\r\r  ga('create', 'UA-55120704-1', 'auto');\r  ga('send', 'pageview');\r\r</script>\r<p>\r\t<img alt=\"Photo: Tent\" src=\"https://www.fs.usda.gov/Internet/FSE_MEDIA/fsbdev3_053439.jpg\" vspace=\"3\" /></p>\r<p>\r\t&nbsp;</p>\r<p>\r\tCampgrounds still allowing campfires (pdf)</p>\r<p>\r\t&nbsp;</p>\r<p>\r\tThe <strong>Mt. Hood National Forest </strong>has many developed campgrounds. To avoid crowds, visit midweek if possible. Many recreation sites are being improved for barrier-free access. Campgrounds are available by reservation or on a first-come, first-served basis. For campground reservations please call Reserve America at 1-877-444-6777 or visit them on the web at <a href=\"http://www.r",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 10,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "INTERPRETIVE PROGRAMS",
                    "RecAreaActivityDescription": "<p>\r\t<img alt=\"'Festival of the Forest' participant feels native animal pelts.\" src=\"https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5227098.jpg\" style=\"width: 100px; height: 151px\" />Forest Service interpretive specialists and volunteers lead seasonal outdoor education hikes. Visit&nbsp;<strong>Mt. Hood National Forest</strong>&nbsp;<a href=\"https://www.fs.usda.gov/detail/mthood/?cid=FSBDEV3_036715\">Ranger District offices</a> to find out about these hikes, to see interpretive displays and more.</p>\r<p>\r\t<strong>All educators </strong>are invited to participate in <a href=\"https://www.fs.usda.gov/detail/mthood/?cid=STELPRDB5186995\">Passport to the Forest </a>a mobile conservation education program offered by <strong>Zigzag Ranger District</strong>.</p>\r",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "FISHING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "HIKING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 15,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "HORSEBACK RIDING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 20,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "PICNICKING",
                    "RecAreaActivityDescription": "<p>\r\t<strong>Mt. Hood National Forest </strong>offers several developed picnic areas. The modest fee charged at some of the following picnic sites provides picnic tables, restrooms and trash service.</p>\r<p>\r\tFor no fee at all, visitors may picnic anywhere in the forest. Always pack out all trash, and remember that forest regulations prohibit driving off of a road to access a picnic site.</p>\r",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 22,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "WINTER SPORTS",
                    "RecAreaActivityDescription": "<p><img alt=\"People gliding over snow on skis\" src=\"https://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd539817.jpg\" style=\"height: 171px; width: 300px\" />Winter sports, such as skiing and snowboarding, are some of the most popular recreation opportunities on Mt. Hood National Forest. Six commercial ski areas offer plenty of opportunities of fun in the snow for skiers at all levels.</p>\r\r<p style=\"text-align: center\">&nbsp;</p>\r\r<p style=\"text-align: center\"><strong>Before Heading Out:</strong></p>\r\r<p>-Check out the <a href=\"https://www.fs.usda.gov/detail/mthood/recreation/?cid=stelprd3831837\">Winter Conditions</a> page to get important information about avalanche conditions, winter driving, travel safety, and more.</p>\r\r<p>-Check out <a href=\"https://www.fs.usda.gov/alerts/mthood/alerts-notices\">Forest Alerts</a> and <a href=\"http://tripcheck.com/\">Road Conditions</a>&nbsp; pages</p>\r\r<p>-Check <a href=\"http://forecast.weather.gov/MapClick.php?lat=45.3307&amp;lon=-121.7103\">Weather Forecasts</a></p>\r",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 23,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "RECREATIONAL VEHICLES",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "WILDLIFE VIEWING",
                    "RecAreaActivityDescription": "<p>\r\t<img alt=\"Pileated Woodpecker\" src=\"https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5227096.jpg\" style=\"width: 100px; height: 95px\" />Many species of <a href=\"https://www.fs.usda.gov/detail/mthood/?cid=FSBDEV3_036675\">amphibians</a>, <a href=\"https://www.fs.usda.gov/detail/mthood/?cid=FSBDEV3_036679\">birds</a>, <a href=\"https://www.fs.usda.gov/detail/mthood/?cid=FSBDEV3_036680\">butterflies</a>, <a href=\"https://www.fs.usda.gov/detail/mthood/?cid=FSBDEV3_036681\">mammals</a> and more can be found in <strong>Mt. Hood National Forest</strong>. Some species may occur in migration; and some breed locally.</p>\r<p>\r\t<em>Note: The species listed on the linked pages above are not an exhaustive list based on all records of accidental or rare species sightings but more of a general list based on occasional sightings and habitat associations.</em></p>\r<p>\r\t<strong>The Oregon Cascades Birding Trail </strong>(<a href=\"http://www.oregonbirdingtrails.org/cascades.htm\">http://www.oregonbirdingtrails.org/cascades.",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 30,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "FIRE LOOKOUTS/CABINS OVERNIGHT",
                    "RecAreaActivityDescription": "<script>\r  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\r\r  ga('create', 'UA-55120704-1', 'auto');\r  ga('send', 'pageview');\r\r</script>\r<p>\r\tA number of cabins are available for overnight stays.<img align=\"left\" alt=\"Photo: Ranger's Cabin\" hspace=\"5\" src=\"https://www.fs.usda.gov/Internet/FSE_MEDIA/fsbdev3_053449.gif\" style=\"width: 150px; height: 138px\" vspace=\"3\" /></p>\r",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 106,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "SWIMMING",
                    "RecAreaActivityDescription": "<p>\r\tSwimming is permitted in <strong>Mt. Hood National Forest </strong>waters unless posted otherwise. Water temperatures are generally extremely cold. Exercise caution to prevent <a href=\"http://prdp2fs.ess.usda.gov/wps/portal/fsinternet/!ut/p/c4/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gjAwhwtDDw9_AI8zPwhQoY6BdkOyoCAPkATlA!/?ss=110606&amp;navtype=BROWSEBYSUBJECT&amp;cid=FSE_003789&amp;navid=150100000000000&amp;pnavid=150000000000000&amp;position=BROWSEBYSUBJECT&amp;ttype=main&amp;pname=Mt. Hood National Forest- Outdoor Safety &amp; Ethics#hypothermia\">hypothermia</a>. Also, river currents and eddies can be powerful. Avoid swimming in unfamiliar waters.<br />\r\t&nbsp;</p>\r",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 109,
                    "ActivityParentID": "",
                    "RecAreaID": "1106",
                    "ActivityName": "HORSE CAMPING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "a449a2063dd27713c5e068306f29f7d9",
                    "LinkType": "Official Web Site",
                    "EntityID": "1106",
                    "EntityType": "RecArea",
                    "Title": "Mt. Hood National Forest",
                    "Description": "",
                    "URL": "https://www.fs.usda.gov/mthood"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "37338f23-9cfc-4e12-9f2e-f947a4b2db70",
                    "MediaType": "Image",
                    "EntityID": "1106",
                    "EntityType": "RecArea",
                    "Title": "Mt. Hood National Forest",
                    "Subtitle": "",
                    "Description": "Mt. Hood National Forest",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2018/08/20/18/48/1106_60682d69-d68b-4b32-9cd2-aa4db8afe4b1_1440.jpg",
                    "Credits": "Share the Experience, Rachel Dody",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "d47b0ac0-50f9-4067-96ea-863e9ab10a37",
                    "MediaType": "Image",
                    "EntityID": "1106",
                    "EntityType": "RecArea",
                    "Title": "Mt. Hood National Forest",
                    "Subtitle": "",
                    "Description": "Mt. Hood National Forest",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2018/08/20/18/48/1106_40786c07-675d-480a-9ca9-58d95f1c462d_700.jpg",
                    "Credits": "Share the Experience, Rachel Dody",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ]
        },
        {
            "RecAreaID": "16835",
            "OrgRecAreaID": "",
            "ParentOrgID": "126",
            "RecAreaName": "Salmon Wild and Scenic River",
            "RecAreaDescription": "<h2>Overview:</h2>Only an hour's drive from Portland, Oregon, the clear water of the Salmon River cascades over numerous waterfalls in the Salmon-Huckleberry Wilderness before reaching its lower forested canyons. From its headwaters to the confluence with the Sandy River approximately 33.5 miles (53.9 km) downstream, the river's proximity makes it easy for a great number of people to enjoy its diverse recreational opportunities. The Salmon River incorporates portions of two major physiographic zones—the Cascade Mountain Range and the Columbia Basin. As a result, the river corridor contains great natural diversity, from alpine environments and narrow basalt canyons to wide floodplains with their associated wetlands.\r\n\r\n<h2>Know Before You Go:</h2>\r\n<ul><li> \r\nOne of the best ways to visit the Salmon Wild and Scenic river is to visit the Wildwood Recreation Site on the Mt. Hood Scenic Byway (US Highway 26) near the town of Welches, Oregon.\r\n</li><li> \r\nUpriver from the BLM-managed segment, the nearby Mount Hood National Forest offers many recreational activities, including hiking, horseback riding, fishing, camping, backpacking, and skiing, among others.\r\n</li><li>\r\nDon't Move Firewood: Please protect Pacific Northwest forests by preventing the spread of invasive species. Firewood can carry insects and diseases that can threaten the health of our western forests. You can make a difference by obtaining and burning your firewood near your location of burning.\r\n\r\n\r\n</li></ul>\r\n\r\n<h2>Point of Interest:</h2>\r\nTwo important species found in the Salmon Wild and Scenic River corridor include Roosevelt elk and greater Sandhill cranes. The small population of greater Sandhill cranes is the northernmost breeding population of this species in Oregon.\r\n<br><br>",
            "RecAreaFeeDescription": "",
            "RecAreaDirections": "<u>From Welches, Oregon</u>: Drive 1.3 miles west on US highway 26. Wildwood Recreation Site will be on the left.\r\n",
            "RecAreaPhone": "503-375-5646",
            "RecAreaEmail": "BLM_OR_NO_Mail@blm.gov",
            "RecAreaReservationURL": "",
            "RecAreaMapURL": "https://flic.kr/p/22ovTXs",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.99681,
                    45.35033
                ]
            },
            "RecAreaLongitude": -121.99681,
            "RecAreaLatitude": 45.35033,
            "StayLimit": "14 Days",
            "Keywords": "Salmon wild and scenic river, wild and scenic, WSR,   Fishing, Camping, Day Use Area, Boating, Hunting, Mountain Bike, Hiking, Floating, Whitewater, Wildlife Viewing, Auto Touring,Welches,Scenic byway,Mt. Hood",
            "Reservable": false,
            "Enabled": true,
            "LastUpdatedDate": "2020-12-09",
            "ORGANIZATION": [
                {
                    "OrgID": "126",
                    "OrgName": "Bureau of Land Management",
                    "OrgImageURL": "blm.gif",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.blm.gov",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "BLM",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "139",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "FACILITY": [
                {
                    "FacilityID": "76480a65-dd8d-11ea-9a16-669b13170d67",
                    "FacilityName": "Wildwood Recreation Site Day Pass",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/76480a65-dd8d-11ea-9a16-669b13170d67"
                },
                {
                    "FacilityID": "234075",
                    "FacilityName": "WILDWOOD RECREATION SITE",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/facilities/234075"
                }
            ],
            "RECAREAADDRESS": [
                {
                    "RecAreaAddressID": "870250",
                    "RecAreaID": "16835",
                    "RecAreaAddressType": "Default",
                    "RecAreaStreetAddress1": "Northwest Oregon District",
                    "RecAreaStreetAddress2": "1717 Fabry Rd, SE",
                    "RecAreaStreetAddress3": "",
                    "City": "Salem",
                    "PostalCode": "97306",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2018-04-24"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 5,
                    "ActivityParentID": "",
                    "RecAreaID": "16835",
                    "ActivityName": "BIKING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 10,
                    "ActivityParentID": "",
                    "RecAreaID": "16835",
                    "ActivityName": "INTERPRETIVE PROGRAMS",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "ActivityParentID": "",
                    "RecAreaID": "16835",
                    "ActivityName": "FISHING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "ActivityParentID": "",
                    "RecAreaID": "16835",
                    "ActivityName": "WILDLIFE VIEWING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 31,
                    "ActivityParentID": "",
                    "RecAreaID": "16835",
                    "ActivityName": "FISH VIEWING SITE",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 32,
                    "ActivityParentID": "",
                    "RecAreaID": "16835",
                    "ActivityName": "DAY USE AREA",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "32c451829302727149efec88c5c0e830",
                    "LinkType": "Flickr Album",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Photo Album: Salmon Wild and Scenic River",
                    "Description": "Link to Photo Album: Salmon Wild and Scenic River",
                    "URL": "https://www.flickr.com/photos/blmoregon/albums/72157665466614979"
                },
                {
                    "EntityLinkID": "471f2bdef9f011b29506d0ef8f23882b",
                    "LinkType": "Other",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Green Canyon Campground (Forest Service)",
                    "Description": "Link to Green Canyon Campground (Forest Service)",
                    "URL": "https://www.fs.usda.gov/recarea/mthood/recarea/?recid=53386"
                },
                {
                    "EntityLinkID": "b9701f5745d3c5f92e431819faf0eec3",
                    "LinkType": "Other",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Salmon Wild and Scenic River at rivers.gov",
                    "Description": "Link to Salmon Wild and Scenic River at rivers.gov",
                    "URL": "https://www.rivers.gov/rivers/salmon-or.php"
                },
                {
                    "EntityLinkID": "3b389d14357dee98382321074f019524",
                    "LinkType": "Other",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Leave-No-Trace Principles",
                    "Description": "Link to the 7 Leave-No-Trace Principles\r\n",
                    "URL": "https://lnt.org/learn/7-principles"
                },
                {
                    "EntityLinkID": "d41fc3911601980669ecf7e984a66c0c",
                    "LinkType": "Reservation",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Reserve a Wildwood Group Picnic Area or Shelter",
                    "Description": "Link to Reserve a Wildwood Group Picnic Area or Shelter\r\n",
                    "URL": "https://www.recreation.gov/camping/wildwood-recreation-site/r/campgroundDetails.do?contractCode=NRSO&parkId=74082"
                },
                {
                    "EntityLinkID": "551c0b7277d370c6137587e5a4e73d79",
                    "LinkType": "YouTube",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Interactive Video: 360° at Wildwood Recreation Site",
                    "Description": "Link to an interactive video at Wildwood Recreation Site",
                    "URL": "https://youtu.be/EF551PikLOU"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2469603",
                    "MediaType": "Image",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Salmon Wild and Scenic River",
                    "Subtitle": "",
                    "Description": "Wildwood Recreation Site",
                    "EmbedCode": "",
                    "Height": 270,
                    "Width": 480,
                    "URL": "https://cdn.recreation.gov/public/images/84746.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2469604",
                    "MediaType": "Image",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Salmon Wild and Scenic River",
                    "Subtitle": "",
                    "Description": "Coho Spawning on the Salmon River",
                    "EmbedCode": "",
                    "Height": 270,
                    "Width": 480,
                    "URL": "https://cdn.recreation.gov/public/images/84747.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2469606",
                    "MediaType": "Image",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Salmon Wild and Scenic River",
                    "Subtitle": "",
                    "Description": "Braided Sandy River",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 341,
                    "URL": "https://cdn.recreation.gov/public/images/84749.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2469605",
                    "MediaType": "Image",
                    "EntityID": "16835",
                    "EntityType": "RecArea",
                    "Title": "Salmon Wild and Scenic River",
                    "Subtitle": "",
                    "Description": "Wildwood Recreation Summertime Fun!",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 393,
                    "URL": "https://cdn.recreation.gov/public/images/84748.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "RecAreaID": "16839",
            "OrgRecAreaID": "",
            "ParentOrgID": "126",
            "RecAreaName": "Clackamas Wild and Scenic River",
            "RecAreaDescription": "<p>The Clackamas River is located to the west of the Cascade Range and to the south of the Columbia River Gorge in northern Oregon. Flowing northwest from its sources high in the Cascade Mountains, the designated portion of the river, which is 47 miles (75.6 km) in length, runs from Big Spring (headwaters area) to Big Cliff, just south of the town of Estacada. This most picturesque region is entirely within the Mt. Hood National Forest and encompasses forested lands, wetlands, riparian areas and rock cliffs.\n</p><br>\n<p>Of the 47 miles of the river that carry the wild and scenic designation, the Bureau of Land Management manages a small-but-important portion: six-tenths of a mile of river adjacent to Oregon State Hwy. 224, from a point west of the U.S. Forest Service’s Lazy Bend Campground to a half mile above the river’s bend westward at Big Cliff.\n \nThe area is most recognizable by the green Pratt truss bridge at Memaloose Road, now closed to vehicular traffic, which sits atop the river and connects walkers to the day-use area on the river’s south side.</p><br>\n\n<h2>Know Before You Go:</h2>\n<ul><li> \nThere are no facilities on the Bureau of Land Management portion of the river; however the Forest Service’s seasonal Lazy Bend campground and Big Eddy Picnic Area offer nearby amenities.\n</li><li> \nState Highway 224, following the Clackamas River, enjoys two designations: Cascading Rivers State Scenic Bikeway and the West Cascades National Scenic Byway.\n\n</li><li> \nDon't Move Firewood: Please protect Pacific Northwest forests by preventing the spread of invasive species. Firewood can carry insects and diseases that can threaten the health of our western forests. You can make a difference by obtaining and burning your firewood near your camping destination.\n</li></ul>\n\n<h2>Point of Interest:</h2>\nThe area is most recognizable by the green Pratt truss bridge at Memaloose Road, now closed to vehicular traffic, which sits atop the river and connects walkers to a primitive day-use area on the river's south side.\n",
            "RecAreaFeeDescription": "No fees.",
            "RecAreaDirections": "From Estacada, Oregon: Follow Oregon Highway 224 East for 9.5 miles to the Memaloose Bridge.",
            "RecAreaPhone": "503-375-5646",
            "RecAreaEmail": "BLM_OR_NO_Mail@blm.gov",
            "RecAreaReservationURL": "",
            "RecAreaMapURL": "https://flic.kr/p/21mqvi1",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.21246,
                    45.19269
                ]
            },
            "RecAreaLongitude": -122.21246,
            "RecAreaLatitude": 45.19269,
            "StayLimit": "14 Days",
            "Keywords": "Estacada, Fishing, Rafting, Camping, Day Use Area, Boating, Hunting, Road Bike, Hiking, Floating, Whitewater, Wildlife Viewing, Auto Touring,scenic bikeway,Cascading Rivers Scenic Bikeway,West Cascades Scenic Byway ",
            "Reservable": false,
            "Enabled": true,
            "LastUpdatedDate": "2021-03-10",
            "ORGANIZATION": [
                {
                    "OrgID": "126",
                    "OrgName": "Bureau of Land Management",
                    "OrgImageURL": "blm.gif",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.blm.gov",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "BLM",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "139",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "FACILITY": [],
            "RECAREAADDRESS": [
                {
                    "RecAreaAddressID": "870254",
                    "RecAreaID": "16839",
                    "RecAreaAddressType": "Default",
                    "RecAreaStreetAddress1": "Northwest Oregon District",
                    "RecAreaStreetAddress2": "1717 Fabry Rd, SE",
                    "RecAreaStreetAddress3": "",
                    "City": "Salem",
                    "PostalCode": "97306",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2018-04-25"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 4,
                    "ActivityParentID": "",
                    "RecAreaID": "16839",
                    "ActivityName": "AUTO TOURING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "ActivityParentID": "",
                    "RecAreaID": "16839",
                    "ActivityName": "BIKING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "ActivityParentID": "",
                    "RecAreaID": "16839",
                    "ActivityName": "FISHING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "ActivityParentID": "",
                    "RecAreaID": "16839",
                    "ActivityName": "HIKING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 16,
                    "ActivityParentID": "",
                    "RecAreaID": "16839",
                    "ActivityName": "HUNTING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "6b30051ac20642d54d3f88c8463eedfa",
                    "LinkType": "Map",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "GPS-Ready PDF Map of the Clackamas Wild and Scenic River",
                    "Description": "Link to a GPS-Ready PDF Map of the Clackamas Wild and Scenic River",
                    "URL": "https://www.blm.gov/sites/blm.gov/files/documents/files/wsr-orwa-clackamas-southfork-map.pdf"
                },
                {
                    "EntityLinkID": "9310ca76f2727bfd95fa0a83be159fb9",
                    "LinkType": "Other",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "Cascading Rivers Scenic Bikeway",
                    "Description": "Link to Cascading Rivers Scenic Bikeway website",
                    "URL": "https://traveloregon.com/things-to-do/outdoor-recreation/bicycling/road-biking/cascading-rivers-scenic-bikeway/"
                },
                {
                    "EntityLinkID": "3b3ac904a44b87269d224ca5b971935e",
                    "LinkType": "Other",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "Clackamas Wild and Scenic River at rivers.gov",
                    "Description": "Link to the Clackamas Wild and Scenic River at rivers.gov\r\n",
                    "URL": "https://www.rivers.gov/rivers/clackamas.php"
                },
                {
                    "EntityLinkID": "d0915ce3c7168f50069d2c06bf4c7fc4",
                    "LinkType": "Other",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "Interactive Video: 360° drive along the Clackamas Wild and Scenic River",
                    "Description": "Link to a Interactive Video entitled, 360° drive along the Clackamas Wild and Scenic River",
                    "URL": "https://youtu.be/n7_vJuc2-Q4"
                },
                {
                    "EntityLinkID": "046605ec6b4a6ed863f41134fcd1e1ad",
                    "LinkType": "Flickr",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "Photo Album: Clackamas Wild and Scenic River",
                    "Description": "Link to a Photo Album of the Clackamas Wild and Scenic River\n",
                    "URL": "https://www.flickr.com/photos/blmoregon/albums/72157670451902435"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2469633",
                    "MediaType": "Image",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "Clackamas Wild and Scenic River",
                    "Subtitle": "",
                    "Description": "Fire-scarred trees on the Clackamas River\r\n",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 444,
                    "URL": "https://cdn.recreation.gov/public/images/84776.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2469632",
                    "MediaType": "Image",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "Clackamas Wild and Scenic River",
                    "Subtitle": "",
                    "Description": "Columbine Close-up on the Clackamas River\r\n",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 437,
                    "URL": "https://cdn.recreation.gov/public/images/84775.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2469629",
                    "MediaType": "Image",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "Clackamas Wild and Scenic River",
                    "Subtitle": "",
                    "Description": "Cliffs on the Clackamas River\r\n",
                    "EmbedCode": "",
                    "Height": 263,
                    "Width": 480,
                    "URL": "https://cdn.recreation.gov/public/images/84772.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2469631",
                    "MediaType": "Image",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "Clackamas Wild and Scenic River",
                    "Subtitle": "",
                    "Description": "Highway 224 along the Clackamas River\r\n",
                    "EmbedCode": "",
                    "Height": 245,
                    "Width": 480,
                    "URL": "https://cdn.recreation.gov/public/images/84774.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2469630",
                    "MediaType": "Image",
                    "EntityID": "16839",
                    "EntityType": "RecArea",
                    "Title": "Clackamas Wild and Scenic River",
                    "Subtitle": "",
                    "Description": "Cobbles on the Clackamas River\r\n",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 478,
                    "URL": "https://cdn.recreation.gov/public/images/84773.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "RecAreaID": "1140",
            "OrgRecAreaID": "",
            "ParentOrgID": "129",
            "RecAreaName": "Clear Lake",
            "RecAreaDescription": "Clear Lake is formed by <A HREF=\"http://www.usbr.gov/projects/Facility.jsp?fac_Name=Wasco+Dam\">Wasco Dam</a> which is a major facility of the <A HREF=\"http://www.usbr.gov/projects/Project.jsp?proj_Name=Wapinitia%20Project\">Wapinitia Project</a>. The 557-acre reservoir is located in the Cascade Mountains in Oregon.  The lake is about 13 miles south of Mt. Hood and lies in a small forested valley.  Camping and boat launching are available, and the lake has a very good trout fishery.  Available species include rainbow and brook trout.  Season open year-round.",
            "RecAreaFeeDescription": "",
            "RecAreaDirections": "Site is 65 miles southeast of Portland, Oregon, off U. S. Hwy. No. 26, turn right onto asphalt paved road at the Mt. Hood National Forest - Clear Lake sign, and travel southerly for 1.2 miles.",
            "RecAreaPhone": "541-225-6300",
            "RecAreaEmail": "",
            "RecAreaReservationURL": "",
            "RecAreaMapURL": "",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.70893,
                    45.18053
                ]
            },
            "RecAreaLongitude": -121.70893,
            "RecAreaLatitude": 45.18053,
            "StayLimit": "",
            "Keywords": "",
            "Reservable": false,
            "Enabled": true,
            "LastUpdatedDate": "2020-12-09",
            "ORGANIZATION": [
                {
                    "OrgID": "129",
                    "OrgName": "Bureau of Reclamation",
                    "OrgImageURL": "bor.gif",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.usbr.gov",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "BOR",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "139",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "FACILITY": [],
            "RECAREAADDRESS": [
                {
                    "RecAreaAddressID": "753738",
                    "RecAreaID": "1140",
                    "RecAreaAddressType": "Default",
                    "RecAreaStreetAddress1": "Willamette National Forest",
                    "RecAreaStreetAddress2": "3106 Pierce Parkway",
                    "RecAreaStreetAddress3": "Suite D",
                    "City": "Springfield",
                    "PostalCode": "97477",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "0001-01-01"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 6,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "BOATING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "CAMPING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 10,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "INTERPRETIVE PROGRAMS",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "FISHING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "HIKING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 20,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "PICNICKING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 22,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "WINTER SPORTS",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 23,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "RECREATIONAL VEHICLES",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "WATER SPORTS",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 103,
                    "ActivityParentID": "",
                    "RecAreaID": "1140",
                    "ActivityName": "ENVIRONMENTAL EDUCATION",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "fc3eb5d43e69b61785372e5cdd5dd525",
                    "LinkType": "Official Web Site",
                    "EntityID": "1140",
                    "EntityType": "RecArea",
                    "Title": "Clear Lake",
                    "Description": "",
                    "URL": "http://www.fs.usda.gov/recarea/willamette/recarea/?recid=4399"
                }
            ],
            "MEDIA": []
        },
        {
            "RecAreaID": "13113",
            "OrgRecAreaID": "",
            "ParentOrgID": "126",
            "RecAreaName": "Lower White River Wilderness",
            "RecAreaDescription": "The United States Congress designated the Lower White River Wilderness in 2009 and it now has a total of 2,806 acres. All of this wilderness is located in Oregon and is managed by the Bureau of Land Management (BLM) and the U.S. Forest Service.\r\n\r\nThe White River rises in the high Cascades in western Wasco County, in the Mount Hood National Forest on the southeast flank of Mount Hood. The headwaters are just below White River Glacier in White River Canyon. Additions to the Mount Hood Wilderness protect upper portions of the river, while the Lower White River Wilderness, southeast of the majestic Mount Hood Wilderness and east of Highway 26, protect a segment of lower White River stretch.\r\n\r\nBe sure to contact the BLM's Prineville District or the Mt. Hood National Forest for the latest conditions and access to the spectacular Lower White River Wilderness Area!<p><ol><li>Plan Ahead and Leave No Trace principles:</li><li>Travel and Camp on Durable Surfaces</li><li>Dispose of Waste Properly</li><li>Leave What You Find</li><li>Minimize Campfire Impacts</li><li>Respect Wildlife</li><li>Be Considerate of Other Visitors</li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Know Before You Go</b><p>Visitors can help in protecting this fragile ecosystem by adequately planning and by arriving prepared! Knowledge of the area, weather, terrain, and common sense can help to ensure you have safe, fun, and memorable trip to the wild. Trail junctions are generally unsigned, so you should carry a map and a compass. And always be sure to bring your ten essentials!</p>",
            "RecAreaFeeDescription": "",
            "RecAreaDirections": "<p>The Lower White River rises in the high Cascades in western Wasco County, in the Mount Hood National Forest on the southeast side of Mount Hood. The headwaters are just below White River Glacier in White River Canyon.</p>\r\n<p>Mount Hood Wilderness protects upper portions of the river, while the 2,809-acre Lower White River Wilderness, southeast of the Mount Hood Wilderness and east of highway 26, provides a buffer for a lower segment of the river. There are no maintained trails within Lower White River Wilderness but the Keeps Mill Campground is located just west of the Lower White River Wilderness.</p>\r\n<p>From Dufur, OR follow US-197 south to OR-216 W travel past the forest boundary and through a small section of the Warm Springs Indian Reservation to Forest Road 2120. Follow 2120 north to the Keeps Mill Campground is located along the Wild and Scenic White River just west of the Lower White River Wilderness boundary.</p>\r\n<p>A Rock Creek Reservoir, Post Point map is available for download from the U.S. Forest Service topo maps site. </p>\r\n \r\n \r\n",
            "RecAreaPhone": "541-416-6700",
            "RecAreaEmail": "BLM_OR_PR_Mail@blm.gov",
            "RecAreaReservationURL": "",
            "RecAreaMapURL": "https://flic.kr/p/mL8MUR",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.400454,
                    45.14159
                ]
            },
            "RecAreaLongitude": -121.400454,
            "RecAreaLatitude": 45.14159,
            "StayLimit": "",
            "Keywords": "Prineville BLM",
            "Reservable": false,
            "Enabled": true,
            "LastUpdatedDate": "2020-12-09",
            "ORGANIZATION": [
                {
                    "OrgID": "126",
                    "OrgName": "Bureau of Land Management",
                    "OrgImageURL": "blm.gif",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.blm.gov",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "BLM",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "139",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "FACILITY": [],
            "RECAREAADDRESS": [
                {
                    "RecAreaAddressID": "5449",
                    "RecAreaID": "13113",
                    "RecAreaAddressType": "Default",
                    "RecAreaStreetAddress1": " 3050 N.E. 3rd Street  ",
                    "RecAreaStreetAddress2": "",
                    "RecAreaStreetAddress3": "",
                    "City": " Prineville",
                    "PostalCode": "97754",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2017-05-18"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 14,
                    "ActivityParentID": "",
                    "RecAreaID": "13113",
                    "ActivityName": "HIKING",
                    "RecAreaActivityDescription": "Cross-country",
                    "RecAreaActivityFeeDescription": "No Fee"
                },
                {
                    "ActivityID": 28,
                    "ActivityParentID": "",
                    "RecAreaID": "13113",
                    "ActivityName": "WILDERNESS",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "83ed19f21c1bf99b0986fb3477500ba6",
                    "LinkType": "Flickr",
                    "EntityID": "13113",
                    "EntityType": "RecArea",
                    "Title": "Lower White River Wilderness.",
                    "Description": "View into the canyon of the Lower White River Wilderness.",
                    "URL": "https://farm9.staticflickr.com/8123/8614111447_739d0ed841_b.jpg"
                },
                {
                    "EntityLinkID": "e686bdf644ecf63f64d225c3e28ac4b9",
                    "LinkType": "Flickr",
                    "EntityID": "13113",
                    "EntityType": "RecArea",
                    "Title": "Mt. Hood from the Lower White River Wilderness.",
                    "Description": "View into the canyon of the Lower White River Wilderness with Mt. Hood in background.",
                    "URL": "https://farm8.staticflickr.com/7405/11468941086_a401083e11_b.jpg"
                },
                {
                    "EntityLinkID": "1fbda1cc3e13b247c7a251e99bc1a9b0",
                    "LinkType": "Flickr Album",
                    "EntityID": "13113",
                    "EntityType": "RecArea",
                    "Title": "Photo Album - Lower White River Wilderness",
                    "Description": "The United States Congress designated the Lower White River Wilderness in 2009 and it now has a total of 2,806 acres. All of this wilderness is located in Oregon and is managed by the Bureau of Land Management and the Forest Service.\r\nThe White River rises in the high Cascades in western Wasco County, in the Mount Hood National Forest on the southeast flank of Mount Hood. The headwaters are just below White River Glacier in White River Canyon. Additions to the Mount Hood Wilderness protect upper portions of the river, while the Lower White River Wilderness, southeast of the Mount hood Wilderness and east of highway 26, protects a segment of lower river stretch.",
                    "URL": "https://www.flickr.com/photos/blmoregon/albums/72157638859953836"
                },
                {
                    "EntityLinkID": "4476f87bc5ea9563e4c5ab3e54b537ee",
                    "LinkType": "Local Partnerships",
                    "EntityID": "13113",
                    "EntityType": "RecArea",
                    "Title": "White River Wildlife Area - \tOregon Department of Fish and Wildlife",
                    "Description": "Link to local information on the White River Wildlife Area.",
                    "URL": "http://www.dfw.state.or.us/resources/visitors/white_river_wildlife_area.asp"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2377649",
                    "MediaType": "Image",
                    "EntityID": "13113",
                    "EntityType": "RecArea",
                    "Title": "Sole Western Juniper tree in meadow",
                    "Subtitle": "Sunset with a western juniper.",
                    "Description": "Sun setting over the Lower White River Wilderness.",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 442,
                    "URL": "https://cdn.recreation.gov/public/images/84466.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2377650",
                    "MediaType": "Image",
                    "EntityID": "13113",
                    "EntityType": "RecArea",
                    "Title": "Hiking in the Lower White River Wilderness.",
                    "Subtitle": "Hiking in a ponderosa pine forest.",
                    "Description": "Two hikers in the Lower White River Wilderness.",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 442,
                    "URL": "https://cdn.recreation.gov/public/images/84467.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "RecAreaID": "16841",
            "OrgRecAreaID": "",
            "ParentOrgID": "126",
            "RecAreaName": "South Fork Clackamas Wild and Scenic River",
            "RecAreaDescription": "<h2>Overview:</h2>The South Fork of the Clackamas River is a tributary of the Clackamas River on the western slope of the Cascade Range in northwest Oregon. The 4.2-mile segment flows from its confluence with the East Fork of the South Fork of the Clackamas River and merges with Memaloose Creek to join the mainstem Clackamas River less than an hour's drive from Portland. As it flows through a narrow canyon with large rock outcrops and cliffs, a 100-foot waterfall in the lower part of the segment and old-growth trees along the river add to the visual diversity. Seasonally, deer and elk are in the area, and spotted owls and bald eagles also call the watershed home. Most of the watershed, filled with Pacific silver fir, Douglas fir and western hemlock, is under the care of the U.S. Forest Service.\r\n<h2>Know Before You Go:</h2>\r\n<ul><li> \r\nThe South Fork Clackamas River is an area of concern for bats. More specifically transferring white nose syndrome. White nose syndrome was found to be present in western Washington this spring. This wiped out bats across eastern United States in past years. Several watersheds in the BLM's Northwest Oregon District where identified as priority watersheds for the White Nose Syndrome Response because of these cave/tunnel resources. Individuals visiting the area can transfer material on their shoes from one location to another. Be sure to clean your equipment and boots before and after entering the tunnels to prevent the spread of white nose syndrome.\r\n</li><li> \r\nThere are no facilities on the Bureau of Land Management portion of the river; however the Forest Service’s seasonal Lazy Bend campground and Big Eddy Picnic Area offer nearby amenities.\r\n</li><li> \r\nState Highway 224, following the Clackamas River, enjoys two designations: Cascading Rivers State Scenic Bikeway and the West Cascades National Scenic Byway.\r\n</li><li>\r\nThis is one of the most remote large streams in the state. Trail uses include hiking, mountain biking, backpacking and access to catch-and-release fishing.\r\n</li><li>\r\nWhen recreating on public lands, practice Leave-No-Trace principles\r\n\r\n\r\n</li></ul>\r\n\r\n<h2>Point of Interest:</h2>\r\nThe area is most recognizable by the green Pratt truss bridge at Memaloose Road, now closed to vehicular traffic, which sits atop the river and connects walkers to a primitive day-use area on the river's south side.",
            "RecAreaFeeDescription": "",
            "RecAreaDirections": "<u>From Estacada, Oregon</u>: Follow Oregon Highway 224 East for 9.5 miles to the Memaloose Bridge.",
            "RecAreaPhone": "503-375-5646",
            "RecAreaEmail": "BLM_OR_NO_Mail@blm.gov",
            "RecAreaReservationURL": "",
            "RecAreaMapURL": "https://flic.kr/p/KNnaVG",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.21246,
                    45.19269
                ]
            },
            "RecAreaLongitude": -122.21246,
            "RecAreaLatitude": 45.19269,
            "StayLimit": "14 Days",
            "Keywords": "Estacada, Fishing, Rafting, Camping, Day Use Area, Boating, Hunting, Road Bike, Hiking, Floating, Whitewater, Wildlife Viewing, Auto Touring,scenic bikeway,Cascading Rivers Scenic Bikeway,West Cascades Scenic Byway ",
            "Reservable": false,
            "Enabled": true,
            "LastUpdatedDate": "2020-12-09",
            "ORGANIZATION": [
                {
                    "OrgID": "126",
                    "OrgName": "Bureau of Land Management",
                    "OrgImageURL": "blm.gif",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.blm.gov",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "BLM",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "139",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "FACILITY": [],
            "RECAREAADDRESS": [
                {
                    "RecAreaAddressID": "870256",
                    "RecAreaID": "16841",
                    "RecAreaAddressType": "Default",
                    "RecAreaStreetAddress1": "Northwest Oregon District",
                    "RecAreaStreetAddress2": "1717 Fabry Rd, SE",
                    "RecAreaStreetAddress3": "",
                    "City": "Salem",
                    "PostalCode": "97306",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2018-04-26"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 8,
                    "ActivityParentID": "",
                    "RecAreaID": "16841",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "ActivityParentID": "",
                    "RecAreaID": "16841",
                    "ActivityName": "FISHING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "ActivityParentID": "",
                    "RecAreaID": "16841",
                    "ActivityName": "HIKING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "ActivityParentID": "",
                    "RecAreaID": "16841",
                    "ActivityName": "WILDLIFE VIEWING",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                },
                {
                    "ActivityID": 104,
                    "ActivityParentID": "",
                    "RecAreaID": "16841",
                    "ActivityName": "PHOTOGRAPHY",
                    "RecAreaActivityDescription": "",
                    "RecAreaActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "5dd875d89f6af3ef075ff06a37a6289f",
                    "LinkType": "Flickr Album",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "Photo Album: South Fork Clackamas Wild and Scenic River",
                    "Description": "Link to a Photo Album of the South Fork Clackamas Wild and Scenic River\r\n",
                    "URL": "https://www.flickr.com/photos/blmoregon/albums/72157668642401724"
                },
                {
                    "EntityLinkID": "483cd3ea8b7ae021b92a8c09e775fb8a",
                    "LinkType": "Map",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "GPS-Ready Map of the Clackamas and South Fork of the Clackamas Wild and Scenic Rivers",
                    "Description": "Link to a GPS-Ready Map of the Clackamas and South Fork of the Clackamas Wild and Scenic Rivers\r\n",
                    "URL": "https://www.blm.gov/sites/blm.gov/files/documents/files/wsr-orwa-clackamas-southfork-map.pdf"
                },
                {
                    "EntityLinkID": "0243d9827f72d83b5af80e694484e41f",
                    "LinkType": "Other",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "Leave-No-Trace Principles",
                    "Description": "Link to Leave-No-Trace Principles website",
                    "URL": "https://lnt.org/learn/7-principles"
                },
                {
                    "EntityLinkID": "3731b14b2b64b3d4e160c13e7e8a06dd",
                    "LinkType": "Other",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "South Fork Clackamas Wild and Scenic River at rivers.gov",
                    "Description": "Link to South Fork Clackamas Wild and Scenic River at rivers.gov website",
                    "URL": "https://www.rivers.gov/rivers/clackamas-sf.php"
                },
                {
                    "EntityLinkID": "cedc2efc8cb62c18b70038ad2e40f420",
                    "LinkType": "YouTube",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "Interactive Video 360° adventure at Lower South Fork Clackamas Falls",
                    "Description": "Link to a Interactive Video 360° adventure at Lower South Fork Clackamas Falls\r\n",
                    "URL": "https://youtu.be/t4PbKDI1GEQ"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2483900",
                    "MediaType": "Image",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "South Fork Clackamas Wild and Scenic River ",
                    "Subtitle": "",
                    "Description": "Falls of the South Fork Clackamas Wild and Scenic River",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 442,
                    "URL": "https://cdn.recreation.gov/public/images/84802.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2483902",
                    "MediaType": "Image",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "South Fork Clackamas Wild and Scenic River ",
                    "Subtitle": "",
                    "Description": "A creek confluence on the South Fork Clackamas Wild and Scenic River",
                    "EmbedCode": "",
                    "Height": 264,
                    "Width": 480,
                    "URL": "https://cdn.recreation.gov/public/images/84804.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2483903",
                    "MediaType": "Image",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "South Fork Clackamas Wild and Scenic River ",
                    "Subtitle": "",
                    "Description": "A hiker viewing a side waterfall\r\n",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 393,
                    "URL": "https://cdn.recreation.gov/public/images/84805.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2483901",
                    "MediaType": "Image",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "South Fork Clackamas Wild and Scenic River ",
                    "Subtitle": "",
                    "Description": "Atop the falls",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 442,
                    "URL": "https://cdn.recreation.gov/public/images/84803.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2483904",
                    "MediaType": "Image",
                    "EntityID": "16841",
                    "EntityType": "RecArea",
                    "Title": "South Fork Clackamas Wild and Scenic River ",
                    "Subtitle": "",
                    "Description": "Atop the waterfall\r\n",
                    "EmbedCode": "",
                    "Height": 295,
                    "Width": 221,
                    "URL": "https://cdn.recreation.gov/public/images/84806.jpg",
                    "Credits": "Bureau of Land Management",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        }
    ],
    "METADATA": {
        "RESULTS": {
            "CURRENT_COUNT": 6,
            "TOTAL_COUNT": 6
        },
        "SEARCH_PARAMETERS": {
            "QUERY": "CAMPING",
            "LIMIT": 1000,
            "OFFSET": 0
        }
    }
}

// https://ridb.recreation.gov/api/v1/facilities?offset=0&latitude=45.1225&longitude=-121.784&radius=25&activity=CAMPING&full=true

const dummyDataFacilities = {
    "RECDATA": [
        {
            "FacilityID": "251452",
            "LegacyFacilityID": "124141",
            "OrgFacilityID": "AN424141",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "FacilityDescription": "<h2>Overview</h2>\n<p>The North Arm Campground sits on the shores of Timothy Lake, in the shadow of Oregon's Mt. Hood. The surrounding forest setting offers spectacular views, wetlands, trails for exploration, and abundant fishing. This campground is smaller and more secluded than the others on the south side of the lake.</p>\n\n<p><strong>DRIVING NOTE:</strong> There are two routes to North Arm Campground—one is rugged and one is suitable for RVs and trailers. <strong>Recommended Route: </strong>From Sandy, Oregon, travel east on Highway 26 for approximately 40 miles to Skyline Road / FS Road 42. Turn right on Skyline Road, and continue south for about 9 miles. Turn right on FS Road 57, and travel west for approximately 3 ½ miles, crossing the dam at Timothy Lake. Take the 2nd right onto FS Road 5810. North Arm is approximately 5 ½ miles from here. Keep right at all intersections—the road becomes FS Road 5890. The campground is on the right.</p>\n\n<h2>Recreation</h2>\nProximity to Timothy Lake allows campers to enjoy a variety of water-related recreation, including boating and sailing, as well as swimming, windsurfing and fishing. Anglers can expect a catch of kokanee salmon and a variety of trout, as well as crayfish. This area has wonderful canoeing and kayaking opportunities.\n \nA variety of trails are located in the area. The Timothy Lake Trail is popular for hiking, mountain biking and horseback riding. The 12 miles of relatively level terrain loops trekkers around the lake, providing scenic views of the area. It connects to the Pacific Crest National Scenic Trail, a lengthy hike that extends across three states, from the borders of Canada and Mexico. Portions of that trail also lead southwest to Clackamas Lake Campground and a historic site.\n \nThe Little Crater Lake is only a short hike away. Little Crater Lake is a geologic oddity, possibly formed by artesian water forcing its way through soft, volcanic rock. The beautiful, turquoise water is a wonder to see. The surrounding meadow is a great place for observing birds and other wildlife. The region is ripe for huckleberry picking as well.<h2>Facilities</h2>\n<p>The campground offers 14 campsites for tent and RV camping. There are four hike-in campsites available as well. Each site is equipped with a table and a fire ring. Accessible vault toilets and drinking water are provided. A campground host is also available onsite.</p>\n\n<p>The nearest gas station/convenience store is about 14 miles away, west on Hwy. 26. The nearest grocery store is in Government Camp, about 19 miles away, west on Hwy. 26.</p>\n<h2>Natural Features</h2>\nThe campground is situated on the northeastern shore of the roughly 1,400-acre lake, at an elevation of 3,400 feet. Timothy Lake was created in 1956 as a storage reservoir for the Oak Grove Hydroelectric Project. It is one of the larger lakes in the Mt. Hood National Forest.\n \nThe campground is nestled in a dense mix conifer forest close to the shoreline. Most sites have a thick understory to provide privacy between sites. The wetlands nearby provide an opportunity to observe many species of wildlife.\n<h2>Nearby Attractions</h2>\nThe Clackamas Lake Ranger Station Historic District is less than 10 miles from the campground. It was built to house Forest Service workers in the early 1900s. The rustic architecture and historic nature of the buildings and the surrounding area draws thousands of tourists each year.<h2>Charges &amp; Cancellations</h2>\n<p>A service fee will apply if you change or cancel your reservation. Late cancellations are subject to additional fees. For full details see  the Recreation.Gov, Rules & Reservation Policies.</p>\n",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "Payment in-full will be charged to your credit card upon completion of the reservation. A non-refundable online reservation fee may be charged for some facilities.",
            "FacilityDirections": "<p><strong>Passenger Vehicles (Rugged Route):</strong> From Sandy, Oregon, travel east on Highway 26 for approximately 40 miles to Skyline Road (FS Road 42). Turn right on Skyline Road, and travel south 4 miles. Turn right on FS Road 58, and follow for 4 miles. Turn left onto FS Road 5890 for 3 miles.</p>\n<p><strong>RVs and Trailers (Recommended Route):</strong> From Sandy, Oregon, travel east on Highway 26 for approximately 40 miles to Skyline Road / FS Road 42. Turn right on Skyline Road, and continue south for about 9 miles. Turn right on FS Road 57, and travel west for approximately 3 ½ miles, crossing the dam at Timothy Lake. Take the 2nd right onto FS Road 5810. North Arm is approximately 5 ½ miles from here. Keep right at all intersections—the road becomes FS Road 5890. The campground is on the right.</p>\n",
            "FacilityPhone": "503-464-8515",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7752778,
                    45.1441667
                ]
            },
            "FacilityLongitude": -121.7752778,
            "FacilityLatitude": 45.1441667,
            "Keywords": "MT. HOOD NF,Timothy Lake",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20398246",
                    "FacilityID": "251452",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "",
                    "AddressCountryCode": "",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "251452",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "251452",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "251452",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "251452",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "251452",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic Sites",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "251452",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Kayaking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "251452",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "86a3ff304f8a3ccda9534fae08c7aa3e",
                    "LinkType": "Other",
                    "EntityID": "251452",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "c0bbd882a37bce74fdab905dd3f6278d",
                    "LinkType": "Other",
                    "EntityID": "251452",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "ed0da4d29887c9890bec0d49b7467b72",
                    "LinkType": "Other",
                    "EntityID": "251452",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/124141_D141.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "f12edd3e-0241-48cc-80cd-0146bf644ca5",
                    "MediaType": "Image",
                    "EntityID": "251452",
                    "EntityType": "Facility",
                    "Title": "North arm of Timothy Lake",
                    "Subtitle": "",
                    "Description": "North arm of Timothy Lake",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/10/251452_57b057c6-383d-47f2-be2b-15a2cfdc18c1_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2418593",
                    "MediaType": "Image",
                    "EntityID": "251452",
                    "EntityType": "Facility",
                    "Title": "Restroom at North Arm",
                    "Subtitle": "",
                    "Description": "Restroom at North Arm",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/78847.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "3b1899a2-c1e7-408f-b55b-0ecdc8da5d2f",
                    "MediaType": "Image",
                    "EntityID": "251452",
                    "EntityType": "Facility",
                    "Title": "North Arm of Timothy Lake",
                    "Subtitle": "",
                    "Description": "North Arm of Timothy Lake",
                    "EmbedCode": "",
                    "Height": 341,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/12/251452_f62492cc-07cc-4e95-b02e-0701a0180624_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "594687f1-b93f-49e7-97ec-c314d809d107",
                    "MediaType": "Image",
                    "EntityID": "251452",
                    "EntityType": "Facility",
                    "Title": "Camas",
                    "Subtitle": "",
                    "Description": "Camas at North Arm",
                    "EmbedCode": "",
                    "Height": 700,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/14/251452_4153336e-e380-4766-9e20-85b6aedc4e94_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2418594",
                    "MediaType": "Image",
                    "EntityID": "251452",
                    "EntityType": "Facility",
                    "Title": "Picnic tables in the communal eating area for hike-to sites",
                    "Subtitle": "",
                    "Description": "Hike-to sites can use the communal picnic table area",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/78848.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "9ab5fefe-0a85-4f59-a5c1-3358fab89742",
                    "MediaType": "Image",
                    "EntityID": "251452",
                    "EntityType": "Facility",
                    "Title": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
                    "Subtitle": "",
                    "Description": "North Arm Campground is situated on a quiet cove of Timothy Lake",
                    "EmbedCode": "",
                    "Height": 960,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/12/04/00/01/251452_e049cdb6-b611-406e-9baf-4ed7e31434af_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232837",
            "LegacyFacilityID": "71620",
            "OrgFacilityID": "AN371620",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "CAMP CREEK",
            "FacilityDescription": "<h2>Overview</h2>\nThe Camp Creek Campground sits next to a babbling forest creek in the country's scenic Pacific Northwest region. The campground is not far from the base of the majestic, snow-covered Mt. Hood, Oregon's highest point and a prominent landmark of the area. A variety of recreational activities surround the campground, including hiking, biking and horseback riding trails, scenic views and points of exploration.<h2>Recreation</h2>\nSurrounding the campground are a variety of hiking and mountain biking trails, including the 1.6-mile Still Creek Trail, which is family-friendly and full of beautiful vegetation, and the Pioneer Bridle Trail, which takes hikers, bikers and horseback riders through about 10 miles of scenic wilderness. \n<br /> <br />\nVisitors to the area also enjoy mountain biking along the nearby Zigzag River, however bikes are not allowed within designated wilderness areas along the trail. \n<br /> <br />\nA variety of trout and whitefish populate the nearby creek and river, where anglers typically enjoy catch-and-release fishing. Wading is also popular in the cool mountain waters. The plentiful creeks and streams in the area stem from glaciers atop Mt. Hood.<h2>Facilities</h2>\nThe campground offers about two dozen single-family and double occupancy campsites, available for tent and RV camping. \n<br /> <br />\nEach site is equipped with tables and campfire rings with grills. Accessible vault toilets and drinking water are provided. Parking surfaces are dirt and gravel, and a dump station is available nearby for a fee.<h2>Natural Features</h2>\nThe shady and quiet campground is situated on a bench above Camp Creek, in the Mt. Hood National Forest, at an elevation of about 2,200 feet. It is tucked in among a mature forest of Douglas fir and cedar trees that are covered in moss. \n<br /> <br />\nThe campground was originally constructed by the Civilian Conservation Corps in 1936. While updates and renovations have been made, some features from the era remain, such as several stone fireplaces.\n<h2>Nearby Attractions</h2>\nThe town of Rhododendron is about 3 miles from the campground, offering a variety of services and supplies.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Portland, travel east on Highway 26 for approximately 32 miles. Camp Creek Campground is located on the south side of the highway, about 3 miles past the community of Rhododendron.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.8647222,
                    45.3030556
                ]
            },
            "FacilityLongitude": -121.8647222,
            "FacilityLatitude": 45.3030556,
            "Keywords": "CACR,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438185",
                    "FacilityID": "232837",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "MT. HOOD",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 24,
                    "FacilityID": "232837",
                    "ActivityName": "VISITOR CENTER",
                    "FacilityActivityDescription": "Ranger Station",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232837",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232837",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232837",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232837",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "bf7dd0b853504b0e8c7b82277ab6dcdb",
                    "LinkType": "Other",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "87b9731fb19bf55f2b537d243fa5f2e1",
                    "LinkType": "Other",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "a490078ffbf65daa66bcc778893a22ce",
                    "LinkType": "Other",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "650b2d9c22cda9858f346ba4d665713a",
                    "LinkType": "Other",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71620_CACR.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573392",
                    "MediaType": "Image",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "CAMP CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66755.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573397",
                    "MediaType": "Image",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "CAMP CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66762.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573466",
                    "MediaType": "Image",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "CAMP CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66842.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573480",
                    "MediaType": "Image",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "CAMP CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66859.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573426",
                    "MediaType": "Image",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "CAMP CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66797.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573408",
                    "MediaType": "Image",
                    "EntityID": "232837",
                    "EntityType": "Facility",
                    "Title": "CAMP CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66773.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "272093",
            "LegacyFacilityID": "152792",
            "OrgFacilityID": "AN452792",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "SHERWOOD CAMPGROUND",
            "FacilityDescription": "<h2>Overview</h2>\nSherwood campground is an easily accessible location for simple camping, with beautiful landscapes and the Hood River rushing next to it. Close to hiking and recreational locations, Sherwood campground is a prime location for those looking for a centrally located base camp near Mt. Hood, or for those looking for a surprisingly quiet, camping getaway.<h2>Recreation</h2>\nThe location of Sherwood Campground makes for a great place to set up camp and explore the upper Hood River Valley. Hiking trails, waterfalls, river and creeks are in abundance, and with easy access to both Hood River and Mt. Hood, tourist attractions, museums and adventures await.<h2>Facilities</h2>\nSherwood campground is a small campground, with an unexpected charm. It sits right along highway 35, so you can see it as you drive by. The rush of the river that sits next to the campground blocks all traffic sounds from the highway. Pit toilets are located centrally in the campground, making it easy to access. A camp host is available during peak season.<h2>Natural Features</h2>\nWith the Upper Hood River running next to the campground, the nearby traffic is drowned out, and a peaceful retreat is found. Several of the campsites are right on the river, and the beautiful areas that the river has etched is fun to explore.\n<h2>Nearby Attractions</h2>\nThe Sherwood Campground sits near many locations that are easily accessible in the Mt.  Hood area. Campers can walk along highway 35 a couple hundred feet to the Tamanawas Falls trailhead for a beautiful, popular hike. Also, Mt. Hood is only a 15-minute drive from the campground, which has various hiking, biking, and adventure centers for recreationalists.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From I-84 at Hood River, head south on highway 35 toward Mt. Hood. Just past the Tamanawas Falls trailhead parking, the Sherwood Campground is on the right.",
            "FacilityPhone": "541-386-6366",
            "FacilityEmail": "info@lostlakeresort.org",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.5703389,
                    45.3948111
                ]
            },
            "FacilityLongitude": -121.5703389,
            "FacilityLatitude": 45.3948111,
            "Keywords": "",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20440482",
                    "FacilityID": "272093",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "PO Box 90",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Hood River",
                    "PostalCode": "97031",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 9,
                    "FacilityID": "272093",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "8918e1c52ba500ab28f248732b900c47",
                    "LinkType": "Other",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "f13a1ad6312ff25ec4ac893cb62b2d00",
                    "LinkType": "Other",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2583106",
                    "MediaType": "Image",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "SHERWOOD CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84094.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "e28d4bca-424a-4022-9cf5-01d81b26432f",
                    "MediaType": "Image",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "Sherwood",
                    "Subtitle": "",
                    "Description": "Sherwood",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/04/17/16/58/272093_e123a3f3-b369-4adc-a376-484e43fd3ef1_700.jpg",
                    "Credits": "Lost Lake Resort & Campground",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2583103",
                    "MediaType": "Image",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "SHERWOOD CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84091.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "13823e1d-6930-434c-b136-a10e80621676",
                    "MediaType": "Image",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "Shereood",
                    "Subtitle": "",
                    "Description": "Sherwood",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/04/17/16/59/272093_59c90358-f4fa-4588-a730-d5eaf6f087ee_1440.jpg",
                    "Credits": "Lost Lake Resort & Campground",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2583105",
                    "MediaType": "Image",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "SHERWOOD CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84093.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583102",
                    "MediaType": "Image",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "SHERWOOD CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84090.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583107",
                    "MediaType": "Image",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "SHERWOOD CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84095.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583104",
                    "MediaType": "Image",
                    "EntityID": "272093",
                    "EntityType": "Facility",
                    "Title": "SHERWOOD CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84092.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232839",
            "LegacyFacilityID": "71622",
            "OrgFacilityID": "AN371622",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "FISH CREEK (OR)",
            "FacilityDescription": "<h2>Overview</h2>\nFish Creek Campground is ideally located next to the Clackamas Wild and Scenic River in Mt. Hood National Forest. It provides access to some of the area's greatest whitewater, as well as a famous place to fish. Whether it is relaxation or expansive exploration, there's something for everyone at Fish Creek.<h2>Recreation</h2>\nFishing is very popular on the Clackamas and anglers can expect to find winter steelhead, spring chinook and late summer coho salmon, as well as other species of freshwater fish. A convenient boat ramp is available within the campground.\n<br /><br />\nThe Clackamas River also provides miles of wild water as it bends through the scenic Cascade Range, creating prime whitewater rafting opportunities.\n<br /><br />\nA hiking trail follows the river north and south and begins within the campground. Scenic driving is available on the West Cascades Scenic Byway, which follows the river.<h2>Facilities</h2>\nThe campground offers single-family sites for tent or RV camping. Narrow roads within the campground make for tricky navigation for larger RVs.\n<br /><br />\nEach campsite is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided, but utility hookups are not available. Parking surfaces are gravel.<h2>Natural Features</h2>\nThe campground is situated along a scenic bend just above the river at an elevation of about 900 feet. It is in a heavily forested area, with a variety of bushes, ferns and grasses covering the forest floor. Vegetation provides minimal privacy within the campground, but with the river so close, noises within the campground are fairly muffled.\n<br /><br />\nThe river provides habitat for the federally protected bald eagle and northern spotted owl, as well as the occasional peregrine falcon. A variety of wildlife also makes its home in the area.\n<h2>Nearby Attractions</h2>\nThe campground is located about an hour's drive from majestic Mt. Hood, Oregon's tallest point.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, travel east on Highway 224 for approximately 16 miles.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.1516667,
                    45.1588889
                ]
            },
            "FacilityLongitude": -122.1516667,
            "FacilityLatitude": 45.1588889,
            "Keywords": "FLI1,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438187",
                    "FacilityID": "232839",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 25,
                    "FacilityID": "232839",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232839",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232839",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232839",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232839",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232839",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "732c6e76b2b2370f4a1c457e2185e794",
                    "LinkType": "Other",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "1ac875caa35bbc397e9701514aa29413",
                    "LinkType": "Other",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "fc20d3cb8a3f58ec25274b1772c3552c",
                    "LinkType": "Other",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "ba5a6075c76a3372f142f766f6b3a97f",
                    "LinkType": "Other",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71622_FLI1.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573491",
                    "MediaType": "Image",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "FISH CREEK (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66878.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573508",
                    "MediaType": "Image",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "FISH CREEK (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67068.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573499",
                    "MediaType": "Image",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "FISH CREEK (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66990.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573498",
                    "MediaType": "Image",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "FISH CREEK (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66981.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573500",
                    "MediaType": "Image",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "FISH CREEK (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67003.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573502",
                    "MediaType": "Image",
                    "EntityID": "232839",
                    "EntityType": "Facility",
                    "Title": "FISH CREEK (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67016.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232863",
            "LegacyFacilityID": "71649",
            "OrgFacilityID": "AN371649",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "JOE GRAHAM HORSE CAMPGROUND",
            "FacilityDescription": "<h2>Overview</h2>\nJoe Graham Horse Campground is a beautiful equestrian camp with views of majestic Mt. Hood and its surrounding forest. It provides access to a variety of hiking, mountain biking and horseback riding trails, as well as scenic historic sites.<h2>Recreation</h2>\nClackamas Lake is a great place for fishing, swimming and non-motorized boating. Anglers can expect a catch of cutthroat, brook, rainbow and German brown trout.  Nearby Timothy Lake provides opportunities for picnicking as well as water-related recreation, including the use of power boats.\n<br /><br />\nThe Clackamas Lake Ranger Station Historic District is less than a mile from the campground. The structures and cabins were built to house forest service workers in the early 1900s. Rustic architecture and the historic nature of the buildings and the surrounding area draws thousands of visitors each year. It is a must-see while staying at the campground.\n<br /><br />\nHiking, mountain biking and horseback riding are popular activities. The 1-mile Joe Graham Trail begins in the campground and connects to the Pacific Crest Trail, which extends more than 2,650 miles through California, Oregon and Washington as it stretches from Mexico to Canada. Trails to scenic Little Crater Lake and the Mt. Jefferson Wilderness are also nearby.<h2>Facilities</h2>\nThe campground offers single-family equestrian campsites.  Most of the sites are equipped with horse corrals, tables and campfire rings with grills. Accessible vault toilets and drinking water are provided. Horse owners are responsible for cleaning up after their horses.\n<br /><br />\nThe campsites are intended for equestrians with horses only. Clackamas Lake Campground across the meadow is a good alternative site for those without horses.<h2>Natural Features</h2>\nThe campground is located in Mt. Hood National Forest at an elevation of about 3,350 feet. It is near Clackamas Lake and larger Timothy Lake. The campground sits among a forest of tall fir trees near a marshy meadow. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nThe campground is less than 40 miles from Mt. Hood, where a historic lookout provides scenic views of the snow-capped mountain. Hiking and year-round skiing is available there.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Sandy, travel east on Highway 26 for approximately 40 miles to Skyline Road (Road 42). Turn right onto Skyline Road and travel south for 9 miles to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7458333,
                    45.1002778
                ]
            },
            "FacilityLongitude": -121.7458333,
            "FacilityLatitude": 45.1002778,
            "Keywords": "JOE1,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438211",
                    "FacilityID": "232863",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232863",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232863",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232863",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232863",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "232863",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic Sites",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232863",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 34,
                    "FacilityID": "232863",
                    "ActivityName": "SWIMMING SITE",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "44667c661ec338dc1eb44606165c233f",
                    "LinkType": "Other",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "9cc2a4cc23b9b04b3d01a12cbbe54998",
                    "LinkType": "Other",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "0ef16132da0677732449625a294d4633",
                    "LinkType": "Other",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "acbdb20f99b4791f5637f383c91cb57c",
                    "LinkType": "Other",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71649_JOE1.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573772",
                    "MediaType": "Image",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "JOE GRAHAM HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67062.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573694",
                    "MediaType": "Image",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "JOE GRAHAM HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66971.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573731",
                    "MediaType": "Image",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "JOE GRAHAM HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67013.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573738",
                    "MediaType": "Image",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "JOE GRAHAM HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67022.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573688",
                    "MediaType": "Image",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "JOE GRAHAM HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66964.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573665",
                    "MediaType": "Image",
                    "EntityID": "232863",
                    "EntityType": "Facility",
                    "Title": "JOE GRAHAM HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66939.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "245761",
            "LegacyFacilityID": "",
            "OrgFacilityID": "77491",
            "ParentOrgID": "131",
            "ParentRecAreaID": "14443",
            "FacilityName": "AAAA Campgrounds #2",
            "FacilityDescription": "<p>AAA&#39;A campgrounds2 detail.</p><p>test 9/18...9/24....10/5/15 9</p>",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "",
            "FacilityPhone": "",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.045381,
                    45.05043
                ]
            },
            "FacilityLongitude": -122.045381,
            "FacilityLatitude": 45.05043,
            "Keywords": "",
            "StayLimit": "",
            "Reservable": false,
            "Enabled": true,
            "LastUpdatedDate": "2020-09-10",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "14443",
                    "RecAreaName": "Test Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/14443"
                }
            ],
            "FACILITYADDRESS": [],
            "ACTIVITY": [
                {
                    "ActivityID": 9,
                    "FacilityID": "245761",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "d311d543d82073c8c4ccefe68444d27a",
                    "LinkType": "Official Web Site",
                    "EntityID": "245761",
                    "EntityType": "Facility",
                    "Title": "AAAA Campgrounds #2",
                    "Description": "",
                    "URL": "https://www.fs.usda.gov/recarea/test/recarea/?recid=77491"
                }
            ],
            "MEDIA": []
        },
        {
            "FacilityID": "232842",
            "LegacyFacilityID": "71625",
            "OrgFacilityID": "AN371625",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "LOCKABY",
            "FacilityDescription": "<h2>Overview</h2>\nLockaby Campground is ideally located next to the Wild and Scenic Clackamas River in the lush, green mountains of northern Oregon. It provides access to some of the area's greatest whitewater rafting, as well as a famous place to fish. Whether it is relaxation or recreation, there's something for everyone at the campground.<h2>Recreation</h2>\nFishing is very popular in the Clackamas River and anglers can expect a catch of winter steelhead, spring Chinook and late summer Coho salmon, as well as other species of freshwater fish. The Clackamas contains miles of wild water as it bends and drops through the scenic Cascade Range, creating prime whitewater rafting opportunities.\n<br /><br />\nA hiking trail follows the river north and south and begins about a mile away at Fish Creek Campground.  Scenic driving is also available on the West Cascades Scenic Byway, which travels alongside the river.<h2>Facilities</h2>\nThe campground offers more than two dozen single-family sites for tent and RV camping, though RVs over 16 feet are not recommended due to the steep terrain within the facility. Each site is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided, but no hookups are available. Parking surfaces are paved and gravel.<h2>Natural Features</h2>\nThe campground is situated along the river at an elevation of about 900 feet in Mt. Hood National Forest. Most campsites are within a dense stand of cedar trees overlooking the river. Sites are fairly close together and there is very little vegetation on the forest floor.\n<br /><br />\nThe forest provides habitat for the federally protected bald eagle and northern spotted owl, as well as an occasional peregrine falcon. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nA boat ramp is available at Fish Creek Campground, which is less than a mile south of the campground. It provides a convenient river launch for kayaks, canoes and rafts.\n<br /><br />\nJust below nearby Indian Henry Campground, the Clackamas River offers 12.5 miles of class III-IV whitewater. The Upper Clackamas Whitewater Festival is hosted annually in May, attracting rafters from all over the country.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, take Highway 224 east for 15 miles to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.1513889,
                    45.1658333
                ]
            },
            "FacilityLongitude": -122.1513889,
            "FacilityLatitude": 45.1658333,
            "Keywords": "LOCK,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438190",
                    "FacilityID": "232842",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232842",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232842",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232842",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232842",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232842",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232842",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Kayaking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "acdb0a4e368c0e336e747b5362617bdb",
                    "LinkType": "Other",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "23486682b0934256ab6f7aa2c58bd99a",
                    "LinkType": "Other",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "8d5f919cbf8f8468750829f392b21204",
                    "LinkType": "Other",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "4c31a4087027ae8bcbdce631140786c3",
                    "LinkType": "Other",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71625_LOCK.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573619",
                    "MediaType": "Image",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "LOCKABY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66890.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573703",
                    "MediaType": "Image",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "LOCKABY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66982.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573686",
                    "MediaType": "Image",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "LOCKABY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66962.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573715",
                    "MediaType": "Image",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "LOCKABY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66995.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573737",
                    "MediaType": "Image",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "LOCKABY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67021.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573777",
                    "MediaType": "Image",
                    "EntityID": "232842",
                    "EntityType": "Facility",
                    "Title": "LOCKABY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67069.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232838",
            "LegacyFacilityID": "71621",
            "OrgFacilityID": "AN371621",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "LOST CREEK",
            "FacilityDescription": "<h2>Overview</h2>\nLost Creek Campground is a fully accessible campground allowing anyone access to campsites, fishing and a paved nature trail that meanders through the area. The campground is also near the Wild and Scenic Sandy River and not far from the popular Ramona Falls Trailhead. Mt. Hood is just southeast of the campground and is close enough for visitors to enjoy a day trip and sightseeing.<h2>Recreation</h2>\nA variety of trails exist within and near the campground, including the accessible Lost Creek Nature Trail, which explains events in history that helped form the area's geology. A deviation from the road coming into the campground (Forest Road 1825), will lead to a trailhead for spectacular Ramona Falls on the Sandy River. The 7.1-mile trail leads to cascading waterfalls and is one of the most popular hikes on the forest.\n<br /><br />\nFishing is available in the Sandy River and anglers can expect steelhead year-round, Coho salmon in the fall and Chinook salmon from February through October. Trout also inhabit the river. Scenic driving and picnicking are popular activities as well.<h2>Facilities</h2>\nThe campground is fully accessible and provides a variety of single, double and walk-to campsites. Two yurts are available for reservation as well. The structures can accommodate up to six campers each. Visitors must provide their own bedding.\n<br /><br />\nPicnic tables and campfire rings with grills are provided, as are accessible vault toilets and drinking water. Utility hookups are not available. Firewood is available for purchase from the campground host.<h2>Natural Features</h2>\nMoss and shrubbery covers the ground and evergreens tower overhead, providing ample shade for the campground and privacy between the individual and group campsites. The campground is situated in the Old Maid Flat area of Mt. Hood National Forest, northwest of majestic Mt. Hood at an elevation of about 2,600 feet. It sits on one of the largest pyroclastic volcanic mudflows from Mt. Hood's &quot;Old Maid&quot; eruption in the 1700s.\n<h2>Nearby Attractions</h2>\nThe town of Government Camp is located at the base of Mt. Hood, about 18 miles from the campground. Year-round skiing is available there, as well as a variety of activities and amenities.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Portland, follow Highway 26 for 18 miles past the town of Sandy to the community of Zigzag. Turn north (left) onto Lolo Pass Road (Forest Road 18). Travel just over 4 miles and turn right onto Forest Road 1825. Continue for less than a mile and then bear right, staying on Forest Road 1825, and cross the Sandy River bridge. Continue for approximately 2 miles and then bear right at the &quot;Y&quot; junction. The campground is less than a mile past the junction, on the right.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.8344444,
                    45.3819444
                ]
            },
            "FacilityLongitude": -121.8344444,
            "FacilityLatitude": 45.3819444,
            "Keywords": "LSTC,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438186",
                    "FacilityID": "232838",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "MT. HOOD",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232838",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232838",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232838",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232838",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "bfab7543fc8da079bb7ca3c2bf30287e",
                    "LinkType": "Other",
                    "EntityID": "232838",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "8706f8277671bb322f438c0f1c533d3d",
                    "LinkType": "Other",
                    "EntityID": "232838",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "adda3cc984bc44f37e70d7213950c353",
                    "LinkType": "Other",
                    "EntityID": "232838",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "8fbc71ffedebd78209e0f6791e473012",
                    "LinkType": "Other",
                    "EntityID": "232838",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71621_LSTC.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573494",
                    "MediaType": "Image",
                    "EntityID": "232838",
                    "EntityType": "Facility",
                    "Title": "LOST CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66934.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573490",
                    "MediaType": "Image",
                    "EntityID": "232838",
                    "EntityType": "Facility",
                    "Title": "LOST CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66877.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573505",
                    "MediaType": "Image",
                    "EntityID": "232838",
                    "EntityType": "Facility",
                    "Title": "LOST CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67047.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573507",
                    "MediaType": "Image",
                    "EntityID": "232838",
                    "EntityType": "Facility",
                    "Title": "LOST CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67063.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573501",
                    "MediaType": "Image",
                    "EntityID": "232838",
                    "EntityType": "Facility",
                    "Title": "LOST CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67012.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232847",
            "LegacyFacilityID": "71631",
            "OrgFacilityID": "AN371631",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "ROARING RIVER",
            "FacilityDescription": "<h2>Overview</h2>\nRoaring River Campground is located across from the Wild and Scenic Clackamas River in the beautiful Cascade Range of northern Oregon. The small, rustic campground has some charm and provides visitors with access to a variety of outdoor recreation opportunities, including world-famous whitewater rafting.<h2>Recreation</h2>\nFishing is very popular in the Clackamas River and anglers can expect a catch of winter steelhead, spring Chinook and late summer Coho salmon, as well as other species of freshwater fish. The Clackamas River provides miles of wild water as it bends through the scenic Cascade Range, making whitewater rafting a very popular activity.\n<br /><br />\nA hiking trail follows the river north and south. Scenic driving is also available on the nearby West Cascades Scenic Byway, which follows the river.<h2>Facilities</h2>\nThe campground offers just over a dozen single-family sites, the majority of which are designated for tent camping only. RVs larger than 16 feet are not recommended in the campground. Utility hookups are not available and parking surfaces are gravel.\n<br /><br />\nEach site is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided. Firewood is available for purchase within the campground.<h2>Natural Features</h2>\nThe campground is nestled in a wooded area thick with moss and greenery, at an elevation of about 1,000 feet. The river is across the highway and is not visible from the campground, but can sometimes be heard.\n<br /><br />\nThe river provides habitat for the federally protected bald eagle and northern spotted owl, as well as an occasional peregrine falcon. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nJust below nearby Indian Henry Campground, the Clackamas River provides 12.5 miles of class III-IV whitewater as it works its way toward North Fork Reservoir.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, travel east on Highway 224 for 20 miles to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.1216667,
                    45.1672222
                ]
            },
            "FacilityLongitude": -122.1216667,
            "FacilityLatitude": 45.1672222,
            "Keywords": "ROA1,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438195",
                    "FacilityID": "232847",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232847",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232847",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232847",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232847",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232847",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "ceb86a29dd00514e191a52bdb2cc7aa1",
                    "LinkType": "Other",
                    "EntityID": "232847",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "97a12e3e06e54ee5bcd473826e9290fa",
                    "LinkType": "Other",
                    "EntityID": "232847",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "316d0063faed446f3e1b040afad00947",
                    "LinkType": "Other",
                    "EntityID": "232847",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "8c147c5ed5d3311384a322812aae3708",
                    "LinkType": "Other",
                    "EntityID": "232847",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71631_ROA1.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573639",
                    "MediaType": "Image",
                    "EntityID": "232847",
                    "EntityType": "Facility",
                    "Title": "ROARING RIVER",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66912.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573717",
                    "MediaType": "Image",
                    "EntityID": "232847",
                    "EntityType": "Facility",
                    "Title": "ROARING RIVER",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66997.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573724",
                    "MediaType": "Image",
                    "EntityID": "232847",
                    "EntityType": "Facility",
                    "Title": "ROARING RIVER",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67005.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573726",
                    "MediaType": "Image",
                    "EntityID": "232847",
                    "EntityType": "Facility",
                    "Title": "ROARING RIVER",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67007.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573652",
                    "MediaType": "Image",
                    "EntityID": "232847",
                    "EntityType": "Facility",
                    "Title": "ROARING RIVER",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66925.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232841",
            "LegacyFacilityID": "71624",
            "OrgFacilityID": "AN371624",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "LAZY BEND",
            "FacilityDescription": "<h2>Overview</h2>\nLazy Bend Campground sits next to the Wild and Scenic Clackamas River, close to the city of Estacada. The adjacent river provides countless opportunities for rafting, kayaking, fishing and swimming. The lush, green campground is comfortable for individuals and families who want to escape into nature in Oregon's Mt. Hood National Forest.<h2>Recreation</h2>\nFishing is very popular on the Clackamas River. Anglers can expect a catch of winter steelhead, spring Chinook and late summer Coho salmon, as well as other species of freshwater fish. \n<br /><br />\nThe Clackamas bends and drops through the scenic Cascade Range and offers famous whitewater rafting opportunities. The Upper Clackamas Whitewater Festival is held annually in May and attracts rafters from all over the country. \n<br /><br />\nA hiking trail follows the river north and south and begins at nearby Fish Creek Campground. A boat ramp is also available there. Scenic driving is available on the West Cascades Scenic Byway, which follows the river.<h2>Facilities</h2>\nThe campground offers single-family sites, most of which are designated for tent camping only. A few RV sites are available within the campground, though large RVs are not recommended and no hookups are available.\n<br /><br />\nEach site is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided. Some sites are available on a first-come, first-served basis.<h2>Natural Features</h2>\nThe campground is the forest's westernmost campground, situated at an elevation of 800 feet. It lies between the river and the adjacent highway, nestled among a dense stand of trees. Huckleberry bushes can be found throughout the region.\n<br /><br />\nThe forest provides habitat for the federally protected bald eagle and northern spotted owl, as well as an occasional peregrine falcon. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nNorth Fork Reservoir is just over 5 miles northeast of the campground. Boating and other water-related recreation opportunities are available there.\n<br /><br />\nThe campground is 10 miles from Estacada, which offers a variety of dining and shopping options, groceries and fuel.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, travel east on Highway 224 for just over 10 miles to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.2066667,
                    45.1911111
                ]
            },
            "FacilityLongitude": -122.2066667,
            "FacilityLatitude": 45.1911111,
            "Keywords": "LAZY,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438189",
                    "FacilityID": "232841",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 25,
                    "FacilityID": "232841",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232841",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232841",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232841",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "40e63a7b20ddce9d5ca80828be1a46eb",
                    "LinkType": "Other",
                    "EntityID": "232841",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "59cf7a62c9f1abc4a6361060097d1b5c",
                    "LinkType": "Other",
                    "EntityID": "232841",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "6bae5b0fbffe73216262b32c3c8c7233",
                    "LinkType": "Other",
                    "EntityID": "232841",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "b2ed1c96682c9ce304461335861b5bdc",
                    "LinkType": "Other",
                    "EntityID": "232841",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71624_LAZY.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573493",
                    "MediaType": "Image",
                    "EntityID": "232841",
                    "EntityType": "Facility",
                    "Title": "LAZY BEND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66911.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573503",
                    "MediaType": "Image",
                    "EntityID": "232841",
                    "EntityType": "Facility",
                    "Title": "LAZY BEND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67024.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573496",
                    "MediaType": "Image",
                    "EntityID": "232841",
                    "EntityType": "Facility",
                    "Title": "LAZY BEND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66970.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232836",
            "LegacyFacilityID": "71619",
            "OrgFacilityID": "AN371619",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "TOLLGATE",
            "FacilityDescription": "<h2>Overview</h2>\nTollgate Campground is one of the most convenient to Portland, making it a great headquarters for exploring the Mt. Hood area. It stands in the southwestern shadow of Oregon's highest point, Mt. Hood. The campground provides access to a variety of trails, as well as historic sites, including spots along the famed Oregon Trail.<h2>Recreation</h2>\nA variety of hiking, mountain biking and horseback riding trails are available in the area. The nearly 10-mile Pioneer Bridle Trail passes through the campground. A replica of the original Barlow Road tollgate is just east of the campground. The gate was used by travelers along the Oregon Trail from 1879 to 1919.\n<br /><br />\nA day-use picnic area at the campground, providing access to the scenic surroundings, as well as the nearby river and Camp Creek. Anglers enjoy the sport of catch-and-release fishing for small trout and whitefish.<h2>Facilities</h2>\nThe campground offers single-family sites for tent and RV camping. Parking surfaces are dirt and gravel and sometimes uneven. Each site is equipped with tables and campfire rings with grills. Accessible vault toilets and drinking water are provided.\n<br /><br />\nAn adjacent picnic shelter can be reserved for day use and can accommodate up to 30 people and 10 vehicles. It is equipped with multiple tables and pedestal grills.<h2>Natural Features</h2>\nThe campground is located in the Mt. Hood National Forest, approximately 32 miles southeast of Portland, at an elevation of about 2,100 feet. The campground sits on the north bank of the Zigzag River, just east of the community of Rhododendron, in a humid, semi-subtropic environment of Douglas fir and cedar trees.\n<br /><br />\nTollgate Campground was originally constructed by the Civilian Conservation Corps, and some historic features, such as rock fireplaces and a reconstructed picnic shelter still remain.\n<h2>Nearby Attractions</h2>\nThe campground is 2.5 miles from the town of Zigzag, which offers a variety of services, including lodging, eateries and a variety of shops.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Portland, travel southeast on Highway 26 for about 32 miles.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.9052778,
                    45.3219444
                ]
            },
            "FacilityLongitude": -121.9052778,
            "FacilityLatitude": 45.3219444,
            "Keywords": "TOLL,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438184",
                    "FacilityID": "232836",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "MT. HOOD",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 14,
                    "FacilityID": "232836",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232836",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232836",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "232836",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic Sites",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232836",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "0cd6f40a5bef1431b4ee89af5a6edbeb",
                    "LinkType": "Other",
                    "EntityID": "232836",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "0616f60a544469c62c55fd5edd93a036",
                    "LinkType": "Other",
                    "EntityID": "232836",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "d1a0c26be1cf05bf84c1dca5daa08179",
                    "LinkType": "Other",
                    "EntityID": "232836",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "8a007112c721fcfc6d631665afb8ee93",
                    "LinkType": "Other",
                    "EntityID": "232836",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71619_TOLL.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573399",
                    "MediaType": "Image",
                    "EntityID": "232836",
                    "EntityType": "Facility",
                    "Title": "TOLLGATE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66764.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573469",
                    "MediaType": "Image",
                    "EntityID": "232836",
                    "EntityType": "Facility",
                    "Title": "TOLLGATE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66845.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573448",
                    "MediaType": "Image",
                    "EntityID": "232836",
                    "EntityType": "Facility",
                    "Title": "TOLLGATE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66822.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573402",
                    "MediaType": "Image",
                    "EntityID": "232836",
                    "EntityType": "Facility",
                    "Title": "TOLLGATE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66767.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573420",
                    "MediaType": "Image",
                    "EntityID": "232836",
                    "EntityType": "Facility",
                    "Title": "TOLLGATE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66789.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "234247",
            "LegacyFacilityID": "75097",
            "OrgFacilityID": "AN375097",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "CLEAR LAKE CABIN LOOKOUT",
            "FacilityDescription": "<h2>Overview</h2>\nClear Lake Cabin Lookout is situated on the southern slope of Mt. Hood, providing spectacular panorama views of snow-covered treetops, alpine lakes and rugged Cascade peaks. It also provides access to a variety of recreational opportunities, including fishing, hiking and wildlife viewing, as well as winter sports.\n  \nThe lookout can only be accessed by skiing, snowmobiling or snowshoeing up to 4 miles from a parking area at the Skyline Sno-Park. A Sno-Park permit is required to park there and the trek takes about three to four hours. Guests are responsible for their own travel arrangements and safety, and must bring several of their own amenities.<h2>Recreation</h2>\nThe surrounding area is popular among winter sports enthusiasts, as it offers access to miles of great cross country skiing, snowshoeing and snowmobiling. A ski tour is available around the spring-fed Little Crater Lake. Fishing is available in the various mountain lakes and streams, however, many may be frozen.<h2>Facilities</h2>\nThe cabin is atop a 40-foot tower and is surrounded by a wooden catwalk. The 14-by-14 room is furnished with a small bed, a wood stove for heating and a table and chairs. It has a propane cook stove and solar-powered lights. There is no water on-site. \n<br/><br/>\nAn outhouse with vault toilets is located on the ground, as well as a shed stocked with firewood. A rope and pulley system is available to transport gear, as well as firewood, up and down the tower with ease.\n<br/><br/>\nGuests will need to bring their own water for drinking, cooking and cleaning purposes, as well as their own bedding, food and clothing, towels, toilet paper, among other necessities. Garbage bags are also not supplied and guests will need to carry out all trash and clean the facility prior to leaving.<h2>Natural Features</h2>\nThe tower sits on Clear Lake Butte, a 4,454-foot gently sloped hillside covered with fir trees, on the south side of Mt. Hood. Of the nine peaks in Oregon's Cascade Mountain Range, Mt. Hood stands the tallest, at 11,239 feet. It is thickly forested and capped with glaciers and snow. \n<br/><br/>\nThe lookout tower is perched on the mountainside, near the northwest corner of the Warm Springs Indian Reservation. It is one of three Forest Service watchtowers on Mt. Hood and it is still used to spot fires during summertime each year.\n<br/><br/>\nOriginally 100 feet tall when it was built in 1932, the tower was replaced with the current 40-foot building in 1962. It overlooks Clear Lake and Timothy Lake in the distance. A variety of wildlife make its home in the area.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "The lookout is available during winter months, from Nov. 1 to May 31. The maximum length stay is seven consecutive nights. Fees are used for the maintenance and preservation of the lookout.",
            "FacilityDirections": "Access begins at the junction of Highway 26 and Forest Service Road 42, 12 miles south of Government Camp, Oregon, at the Skyline Sno-Park. Guests must park and the Sno-Park and ski, snowshoe or snowmobile to the facility. From the parking area, proceed on Forest Service Road 42 to the 240 spur road and continue to the lookout, approximately 3.2 miles with an elevation climb of 900 feet. It is a good path for moderate skiers and will take three-and-a-half to four hours to complete. <a href=\"http://www.fs.usda.gov/main/mthood/maps-pubs\">Maps</a> are available online or for purchase by calling the Barlow Ranger District.\n<br /><br />\nGuests will need to purchase a Sno-Park permit to park at Skyline Sno-Park. Permits can be purchased at several locations in the Portland area, or at CJ's on Highway 26, west of the intersection of Highway 26 and Forest Service Road 42.",
            "FacilityPhone": "541-467-2291",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7161111,
                    45.1494444
                ]
            },
            "FacilityLongitude": -121.7161111,
            "FacilityLatitude": 45.1494444,
            "Keywords": "CLLO,CLEAR LAKE CABIN,CLEAR LAKE,CLEAR LAKE LOOKOUT,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20439608",
                    "FacilityID": "234247",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "FS RD 42 TO THE 240 SPUR ROAD",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "DUFUR",
                    "PostalCode": "97021",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "234247",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100051,
                    "FacilityID": "234247",
                    "ActivityName": "SNOWMOBILING",
                    "FacilityActivityDescription": "Snowmobiling",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 16,
                    "FacilityID": "234247",
                    "ActivityName": "HUNTING",
                    "FacilityActivityDescription": "Hunting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "234247",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "234247",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "234247",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100017,
                    "FacilityID": "234247",
                    "ActivityName": "BIRDING",
                    "FacilityActivityDescription": "Birding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100020,
                    "FacilityID": "234247",
                    "ActivityName": "CROSS COUNTRY SKIING",
                    "FacilityActivityDescription": "Cross Country Skiing",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "0cb6804c651f86cc40f9027031545f64",
                    "LinkType": "Other",
                    "EntityID": "234247",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "1c8bd88e409636fd3ecfd223f8fd62e0",
                    "LinkType": "Other",
                    "EntityID": "234247",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2579455",
                    "MediaType": "Image",
                    "EntityID": "234247",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE CABIN LOOKOUT",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72473.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "cf254138-d663-4cab-b2b9-daa9346c2ed5",
                    "MediaType": "Image",
                    "EntityID": "234247",
                    "EntityType": "Facility",
                    "Title": "View from lookout deck over outhouse with mountains and forest in the background.",
                    "Subtitle": "",
                    "Description": "View from Clear Lake Cabin Lookout.",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2018/09/11/19/18/234247_bdcdb45b-327f-4eeb-9c65-513177c1017c_700.jpg",
                    "Credits": "USFS",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2579451",
                    "MediaType": "Image",
                    "EntityID": "234247",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE CABIN LOOKOUT",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72469.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2579372",
                    "MediaType": "Image",
                    "EntityID": "234247",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE CABIN LOOKOUT",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72380.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2579344",
                    "MediaType": "Image",
                    "EntityID": "234247",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE CABIN LOOKOUT",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72344.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "dfff46ab-a97b-4763-92cf-c1e55e02ee88",
                    "MediaType": "Image",
                    "EntityID": "234247",
                    "EntityType": "Facility",
                    "Title": "Full size bed in front of 8 window with view of mountains and trees beyond.",
                    "Subtitle": "",
                    "Description": "Clear Lake Lookout sleeping area.",
                    "EmbedCode": "",
                    "Height": 765,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2018/09/11/19/15/234247_82493a78-c6c7-445e-8622-ada522687b28_1440.jpg",
                    "Credits": "USFS",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2579444",
                    "MediaType": "Image",
                    "EntityID": "234247",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE CABIN LOOKOUT",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72462.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "252385",
            "LegacyFacilityID": "",
            "OrgFacilityID": "52778",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "Zigzag Ranger District",
            "FacilityDescription": "<p>Zigzag Ranger District spans parts of the South and West side of Mt Hood.</p><p>The District is comprised of 250,000 acres and is located near a metropolitan area of over a million residents.  The district manages one of the largest recreation programs including 550 summer homes, 30 developed campgrounds, 3 ski areas including Timberline Lodge (Timberline Lodge has nearly 2 million visitors a year, and is one of only three National Historic Landmarks in the Forest Service System), many special use permits, over 300 miles of trails, and 2 wilderness areas.  The district also manages the Bull Run Watershed cooperatively with the City of Portland, which supplies drinking water to the Portland metropolitan area.  The compound of the Ranger District is historic, constructed in the 1930’s by the CCC. Many of the original buildings remain.</p><p> </p><p> </p><p> </p>",
            "FacilityTypeDescription": "Facility",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "",
            "FacilityPhone": "",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.9420244,
                    45.3420633
                ]
            },
            "FacilityLongitude": -121.9420244,
            "FacilityLatitude": 45.3420633,
            "Keywords": "",
            "StayLimit": "",
            "Reservable": false,
            "Enabled": true,
            "LastUpdatedDate": "2020-09-10",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20249342",
                    "FacilityID": "252385",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2018-10-12"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 4,
                    "FacilityID": "252385",
                    "ActivityName": "AUTO TOURING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "252385",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "252385",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 7,
                    "FacilityID": "252385",
                    "ActivityName": "CLIMBING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "252385",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "252385",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "252385",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 15,
                    "FacilityID": "252385",
                    "ActivityName": "HORSEBACK RIDING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 20,
                    "FacilityID": "252385",
                    "ActivityName": "PICNICKING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 22,
                    "FacilityID": "252385",
                    "ActivityName": "WINTER SPORTS",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 23,
                    "FacilityID": "252385",
                    "ActivityName": "RECREATIONAL VEHICLES",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "252385",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 30,
                    "FacilityID": "252385",
                    "ActivityName": "FIRE LOOKOUTS/CABINS OVERNIGHT",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 106,
                    "FacilityID": "252385",
                    "ActivityName": "SWIMMING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 109,
                    "FacilityID": "252385",
                    "ActivityName": "HORSE CAMPING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "84a39dc66e2cad0f0cd8226067cab168",
                    "LinkType": "Official Web Site",
                    "EntityID": "252385",
                    "EntityType": "Facility",
                    "Title": "Zigzag Ranger District",
                    "Description": "",
                    "URL": "https://www.fs.usda.gov/recarea/mthood/recarea/?recid=52778"
                }
            ],
            "MEDIA": []
        },
        {
            "FacilityID": "232872",
            "LegacyFacilityID": "71658",
            "OrgFacilityID": "AN371658",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "LITTLE CRATER LAKE",
            "FacilityDescription": "<h2>Overview</h2>\nLittle Crater Lake Campground is one of the most scenic spots in Mt. Hood National Forest and a very comfortable place to camp. It is not far from Little Crater Lake, a cold, crystal clear, spring-fed pond. Also nearby is Timothy Lake, where boaters and anglers enjoy recreating, all in the shadows of Mt. Hood, Oregon's highest point.<h2>Recreation</h2>\nA short path to view Little Crater Lake begins in the campground. It connects to the Pacific Crest National Scenic Trail, which winds its way through the area, past Timothy Lake and up the slopes of Mt. Hood. The long-distance trail is popular among hikers and backpackers, stretches 2,650 miles through California, Oregon and Washington, from Canada to Mexico.\n<br /><br />\nVisitors enjoy fishing at Timothy Lake, which covers roughly 1,400 acres. Anglers will find Kokanee salmon and a variety of stocked trout.<h2>Facilities</h2>\nThe campground offers more than a dozen single-family sites for tent and RV camping. Each site is equipped with a table and campfire ring with grill. Accessible vault toilets are provided. A hand-pump water spigot is located near the campground's entrance and is the only source of water within the facility. Utility hookups are not available. Parking surfaces are grass, dirt and irregularly shaped.<h2>Natural Features</h2>\nThe quiet campground is nestled in an evergreen forest at an elevation of 3,300 feet. Little Crater Lake is a geologic oddity, possibly formed by artesian water forcing its way through soft, volcanic rock. The beautiful, turquoise water is a wonder to see. \n<br /><br />\nThe surrounding meadow is a great place for observing birds and other wildlife. The region is ripe for huckleberry picking as well.\n<h2>Nearby Attractions</h2>\nThe Clackamas Lake Ranger Station Historic District is less than 10 miles from the campground. It was built to house forest service workers in the early 1900s. The rustic architecture and historic nature of the buildings and the surrounding area draws thousands of visitors each year.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Sandy, travel east on Highway 26 for approximately 40 miles to Skyline Road (Road 42). Turn right and travel south for 4 miles. Turn right on Forest Road 58 and travel 2 miles to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7458333,
                    45.1475
                ]
            },
            "FacilityLongitude": -121.7458333,
            "FacilityLatitude": 45.1475,
            "Keywords": "LIT1,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438220",
                    "FacilityID": "232872",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 14,
                    "FacilityID": "232872",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232872",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232872",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "232872",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic Sites",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "232872",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "f23bc8d812af9f603e1a7357a1751820",
                    "LinkType": "Other",
                    "EntityID": "232872",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "f76cff927fda1a0a35438a1dd2671089",
                    "LinkType": "Other",
                    "EntityID": "232872",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "14355c572137243c0f7e31549676bd31",
                    "LinkType": "Other",
                    "EntityID": "232872",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "a59f3168e0bc8c1061f92a2f922fda8e",
                    "LinkType": "Other",
                    "EntityID": "232872",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71658_LIT1.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573784",
                    "MediaType": "Image",
                    "EntityID": "232872",
                    "EntityType": "Facility",
                    "Title": "LITTLE CRATER LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67076.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573630",
                    "MediaType": "Image",
                    "EntityID": "232872",
                    "EntityType": "Facility",
                    "Title": "LITTLE CRATER LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66901.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573776",
                    "MediaType": "Image",
                    "EntityID": "232872",
                    "EntityType": "Facility",
                    "Title": "LITTLE CRATER LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67067.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573706",
                    "MediaType": "Image",
                    "EntityID": "232872",
                    "EntityType": "Facility",
                    "Title": "LITTLE CRATER LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66985.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573611",
                    "MediaType": "Image",
                    "EntityID": "232872",
                    "EntityType": "Facility",
                    "Title": "LITTLE CRATER LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66882.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232831",
            "LegacyFacilityID": "71614",
            "OrgFacilityID": "AN371614",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "TRILLIUM",
            "FacilityDescription": "<h2>Overview</h2>\nTrillium Lake Campground is a beautiful and popular campground not far from the quaint town of Government Camp. It provides spectacular views of majestic Mt. Hood, Oregon's highest point. The campground is well-known for its scenery and abundant recreational opportunities, as well as being a great, family-friendly place to camp.<h2>Recreation</h2>\nBoating, swimming and fishing are popular on 63-acre Trillium Lake. A small boat ramp is available within the campground and a larger ramp is available in the nearby day-use area. An accessible fishing pier is also available. Anglers cast for a variety of trout.<br />\n<br />\nThe 2-mile Trillium Shoreline Trail circles the lake, and parts of it are accessible. Visitors also enjoy hiking and biking on other trails in the vicinity. Tours of the area's historical sites are also popular.<h2>Facilities</h2>\nThe campground offers dozens of single and double sites for tent and RV camping. Some first-come, first-served sites are available, as well as some fully accessible sites. Parking surfaces are mostly paved, but some are gravel.\n<br /><br />\nEach site is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided. An accessible picnic shelter is adjacent and can accommodate up to 30 people. Parking is available.\n<br /><br />\nAn accessible amphitheater within the campground can be reserved for day use and can accommodate up to 30 people. Educational programs are held on weekends throughout the summer.<h2>Natural Features</h2>\nThe campground is located about 40 miles southeast of Portland, in the Mt. Hood National Forest. It sits alongside Trillium Lake at an elevation of 3,600 feet, and is nestled in a shady, mixed conifer forest that provides privacy between campsites.\n<h2>Nearby Attractions</h2>\nTimberline Lodge, a National Historic Landmark on Mt. Hood, is located within 10 miles of the campground.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Portland, travel southeast on Highway 26 for about 40 miles. Turn right a mile east of Government Camp. Continue 2 miles to the campground entrance.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7344444,
                    45.27
                ]
            },
            "FacilityLongitude": -121.7344444,
            "FacilityLatitude": 45.27,
            "Keywords": "TRIL,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438179",
                    "FacilityID": "232831",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "MT. HOOD",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 34,
                    "FacilityID": "232831",
                    "ActivityName": "SWIMMING SITE",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 32,
                    "FacilityID": "232831",
                    "ActivityName": "DAY USE AREA",
                    "FacilityActivityDescription": "Amphitheater",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232831",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232831",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 10,
                    "FacilityID": "232831",
                    "ActivityName": "INTERPRETIVE PROGRAMS",
                    "FacilityActivityDescription": "Educational Programs",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232831",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "232831",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic Sites",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "5aa43beb793e9a8e35837d9a647a016f",
                    "LinkType": "Other",
                    "EntityID": "232831",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "97d1712fe8559795e960d17eab4b7a6c",
                    "LinkType": "Other",
                    "EntityID": "232831",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "d904043dcd9d8f703b35c066c5c65b50",
                    "LinkType": "Other",
                    "EntityID": "232831",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "8e068770140c84a7b9a8b7a271ac3077",
                    "LinkType": "Other",
                    "EntityID": "232831",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71614_TRIL.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573411",
                    "MediaType": "Image",
                    "EntityID": "232831",
                    "EntityType": "Facility",
                    "Title": "TRILLIUM",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66777.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573415",
                    "MediaType": "Image",
                    "EntityID": "232831",
                    "EntityType": "Facility",
                    "Title": "TRILLIUM",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66784.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573458",
                    "MediaType": "Image",
                    "EntityID": "232831",
                    "EntityType": "Facility",
                    "Title": "TRILLIUM",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66832.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573456",
                    "MediaType": "Image",
                    "EntityID": "232831",
                    "EntityType": "Facility",
                    "Title": "TRILLIUM",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66830.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573405",
                    "MediaType": "Image",
                    "EntityID": "232831",
                    "EntityType": "Facility",
                    "Title": "TRILLIUM",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66770.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232870",
            "LegacyFacilityID": "71656",
            "OrgFacilityID": "AN371656",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "CLACKAMAS LAKE",
            "FacilityDescription": "<h2>Overview</h2>\nClackamas Lake Campground is a great camping destination, especially when nearby Timothy Lake sites are full.  The lake is small and shallow.  The facility is located in the Clackamas Lake Historic District in Mt. Hood National Forest. It provides access to fishing, swimming and leisurely boating, as well as a number of trails and historic points along the way.<h2>Recreation</h2>\nClackamas Lake is a great place for fishing, swimming and non-motorized boating. Anglers can expect a catch of cutthroat, brook, rainbow or German brown trout. A variety of wildlife make its home in the area as well. \n<br /><br />\nNearby Timothy Lake provides opportunities for picnicking and water-related recreation, including use of power boats.\n<br /><br />\nThe Clackamas Lake Ranger Station Historic District is less than a mile from the campground. It is a series of structures and cabins built to house Forest Service workers in the early 1900s. Rustic architecture and the historic nature of the buildings and the surrounding area, draws thousands of tourists each year. It is a must-see while staying at the campground.\n<br /><br />\nHiking, mountain biking and horseback riding are also popular activities. The 2.2-mile Miller Trail begins in the campground and connects to the Pacific Crest Trail, which extends more than 2,650 miles, from Canada to Mexico. Additional trails, to scenic Little Crater Lake and to the Mt. Jefferson Wilderness, are also available in the area.<h2>Facilities</h2>\nThe campground offers single-family sites for tent and RV camping. There are 11 equestrian sites in the 49-site campground with corrals. Equestrian sites have 2, 3, or 4 horse corrals and are reservable only by those with horses. Some sites are available on a first-come, first-served basis.<h2>Natural Features</h2>\nThe campground is nestled in a heavily wooded forest of pine trees, with partial views of Oregon's highest peak. A lush, green understory provides some privacy between campsites. The campground is near the shores of 3-acre Clackamas Lake, and just three miles from larger Timothy Lake. It is situated at an elevation of about 3,400 feet.\n<h2>Nearby Attractions</h2>\nThe campground is less than 40 miles from Mt. Hood, where a historic lookout provides scenic views of the snow-capped mountain. Hiking and year-round skiing is available.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Sandy, travel east on Highway 26 for approximately 40 miles to Skyline Road (Forest Road 42). Turn right on Skyline Road and continue south for 10 miles to the Clackamas Lake entrance sign. Turn left and head east less than half a mile to the campground entrance.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7472222,
                    45.0958333
                ]
            },
            "FacilityLongitude": -121.7472222,
            "FacilityLatitude": 45.0958333,
            "Keywords": "CLA1,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438218",
                    "FacilityID": "232870",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 34,
                    "FacilityID": "232870",
                    "ActivityName": "SWIMMING SITE",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "232870",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232870",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232870",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232870",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "232870",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic Sites",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232870",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "12cbe7bc666d278dc5bc98fc2b8dcd6f",
                    "LinkType": "Other",
                    "EntityID": "232870",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "aa10e45c9278398f86140ee4c300300c",
                    "LinkType": "Other",
                    "EntityID": "232870",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "030725ff4200779574e7e19d66cc16d2",
                    "LinkType": "Other",
                    "EntityID": "232870",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "0b887c2f704981f4e35cad04a6f216db",
                    "LinkType": "Other",
                    "EntityID": "232870",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71656_CLA1.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573669",
                    "MediaType": "Image",
                    "EntityID": "232870",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66943.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573701",
                    "MediaType": "Image",
                    "EntityID": "232870",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66979.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573691",
                    "MediaType": "Image",
                    "EntityID": "232870",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66967.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573749",
                    "MediaType": "Image",
                    "EntityID": "232870",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67035.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573682",
                    "MediaType": "Image",
                    "EntityID": "232870",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66958.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232843",
            "LegacyFacilityID": "71626",
            "OrgFacilityID": "AN371626",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "ARMSTRONG",
            "FacilityDescription": "<h2>Overview</h2>\nArmstrong Campground is a small but beautiful place to camp, right on the edge of the Clackamas Wild and Scenic River. The river flows right by spacious, lush, family-friendly campsites, giving visitors plenty of access to the river, as well as to the surrounding forest.<h2>Recreation</h2>\nFishing is very popular in the Clackamas River and anglers can expect a catch of winter steelhead, spring chinook and late summer coho salmon, as well as other species of freshwater fish. The Clackamas contains miles of wild water as it bends and drops through the scenic Cascade Range, creating prime whitewater rafting opportunities. \n<br /><br />\nA hiking trail follows the river north and south and begins about a mile away at Fish Creek Campground. <h2>Facilities</h2>\nThe campground offers single-family sites available mostly for tent camping, but a few sites having space for RVs. Larger RVs may have trouble navigating the roads within the facility. An overflow parking area is available.\n<br /><br />\nEach site is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided. No hookups are available. Parking surfaces are gravel and dirt.<h2>Natural Features</h2>\nThe campground is located in Mt. Hood National Forest at an elevation of about 870 feet. A variety of ferns, shrubs and grasses cover the forest floor and provide some privacy between sites. While the campground is close to the road, the sound of the river blocks most of the noise.\n<br /><br />\nThe forest provides habitat for the federally protected bald eagle and northern spotted owl, as well as an occasional peregrine falcon. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nA boat ramp is available at Fish Creek Campground, which is less than half a mile south of the campground. It is a convenient place to launch kayaks, canoes or other boats on the river.\n<br /><br />\nJust below Indian Henry Campground, the Clackamas River offers 12.5 miles of class III-IV whitewater. The Upper Clackamas Whitewater Festival is hosted annually on the river, attracting rafters from all over the country.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, travel east on Highway 224 for 14 miles to Armstrong Campground, on the right.\n",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.1516667,
                    45.1627778
                ]
            },
            "FacilityLongitude": -122.1516667,
            "FacilityLatitude": 45.1627778,
            "Keywords": "ARMS,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438191",
                    "FacilityID": "232843",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232843",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232843",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232843",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232843",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232843",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232843",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232843",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "0b057a0deb81c27d48468b1fe6817153",
                    "LinkType": "Other",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "5543a924367bb28f79bb008b028cdc91",
                    "LinkType": "Other",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "5fbc48fcdb026c377345ab059026f064",
                    "LinkType": "Other",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "c13ab3b7dd44b9e8220ac74276198766",
                    "LinkType": "Other",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71626_ARMS.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573625",
                    "MediaType": "Image",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "ARMSTRONG",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66896.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573681",
                    "MediaType": "Image",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "ARMSTRONG",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66957.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573760",
                    "MediaType": "Image",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "ARMSTRONG",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67049.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573755",
                    "MediaType": "Image",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "ARMSTRONG",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67042.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573666",
                    "MediaType": "Image",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "ARMSTRONG",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66940.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573758",
                    "MediaType": "Image",
                    "EntityID": "232843",
                    "EntityType": "Facility",
                    "Title": "ARMSTRONG",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67045.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232867",
            "LegacyFacilityID": "71653",
            "OrgFacilityID": "AN371653",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "HOODVIEW ",
            "FacilityDescription": "<h2>Overview</h2>\nThe Hoodview Campground sits on the shores of Timothy Lake, in the shadow of Oregon's Mt. Hood. The surrounding forest setting offers spectacular views, miles of trails for exploration and abundant fishing.\n<h2>Recreation</h2>\nProximity to Timothy Lake allows campers to enjoy a variety of water-related recreation activities, including boating and sailing, as well as swimming, windsurfing and fishing. Anglers can expect a catch of kokanee salmon and a variety of trout. \n  \nA range of trails are located in the area. The Timothy Lake Trail is popular for hiking, mountain biking and horseback riding. The 12 miles of relatively level terrain loops trekkers around the lake, providing scenic views of the area. It connects to the Pacific Crest National Scenic Trail, a lengthy hike that extends across three states, from the borders of Canada and Mexico. Portions of that trail also lead southwest to Clackamas Lake Campground.\n   \nThe Clackamas Lake Ranger Station Historic District is less than 3 miles from the campground. It was built to house forest service workers in the early 1900s. The rustic architecture and historic nature of the buildings and the surrounding area draws thousands of tourists each year.<h2>Facilities</h2>\n<p>The campground offers dozens of single-family campsites for tent and RV camping. Each site is equipped with tables and campfire rings with grills. Accessible vault toilets and drinking water are provided. A campground host is also available on-site.</p>\n\n<p>The nearest gas station/convenience store is about 18 miles away, west on Hwy. 26. The nearest grocery store is in Government Camp, about 23 miles away, west on Hwy. 26.</p>\n<h2>Natural Features</h2>\nThe campground is situated on the southeastern shore of the roughly 1,400-acre lake, at an elevation of 3,400 feet. Timothy Lake was created in 1956 as a storage reservoir for the Oak Grove Hydroelectric Project. It is one of the larger lakes in the Mt. Hood National Forest. \n  \nThe campground is nestled in a mixed conifer forest, with many sites with views of the water's edge, offering views of Mt. Hood. A thick understory of rhododendron bushes provide privacy between sites.\n\n<h2>Nearby Attractions</h2>\nHoodview is about 28 miles from the base of majestic Mt. Hood, the highest point in Oregon. The historic Timberline Lodge in Government Camp offers scenic views of the snow-capped mountain.\n<h2>Charges &amp; Cancellations</h2>\n<p>A service fee will apply if you change or cancel your reservation. Late cancellations are subject to additional fees. For full details see Recreation.Gov, Rules & Reservation Policies.</p>\n",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "  Payment in-full will be charged to your credit card upon completion of the reservation. A non-refundable online reservation fee may be charged for some facilities.",
            "FacilityDirections": "From Sandy, Oregon, travel east on Highway 26 for approximately 40 miles to Skyline Road/Road 42. Turn right on Skyline Road and continue south for about 9 miles. Turn right on Forest Service Road 57 and travel west for 2 miles, then turn right again at the Hoodview Campground entrance sign.\n",
            "FacilityPhone": "503-464-8515",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7930556,
                    45.1094444
                ]
            },
            "FacilityLongitude": -121.7930556,
            "FacilityLatitude": 45.1094444,
            "Keywords": "HOOD,MT. HOOD NF - FS,Timothy Lake",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438215",
                    "FacilityID": "232867",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "Skyline Rd",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Timothy Lake",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 100017,
                    "FacilityID": "232867",
                    "ActivityName": "BIRDING",
                    "FacilityActivityDescription": "Birding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100008,
                    "FacilityID": "232867",
                    "ActivityName": "CANOEING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100060,
                    "FacilityID": "232867",
                    "ActivityName": "CRAWFISHING",
                    "FacilityActivityDescription": "Crawfishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 15,
                    "FacilityID": "232867",
                    "ActivityName": "HORSEBACK RIDING",
                    "FacilityActivityDescription": "Horseback Riding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 10,
                    "FacilityID": "232867",
                    "ActivityName": "INTERPRETIVE PROGRAMS",
                    "FacilityActivityDescription": "Interpretive Programs",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100018,
                    "FacilityID": "232867",
                    "ActivityName": "NON-MOTORIZED BOATING",
                    "FacilityActivityDescription": "Non-Motorized Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100000,
                    "FacilityID": "232867",
                    "ActivityName": "MOTOR BOAT",
                    "FacilityActivityDescription": "Motor Boat",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 105,
                    "FacilityID": "232867",
                    "ActivityName": "PADDLING",
                    "FacilityActivityDescription": "Paddling",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 104,
                    "FacilityID": "232867",
                    "ActivityName": "PHOTOGRAPHY",
                    "FacilityActivityDescription": "Photography",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 20,
                    "FacilityID": "232867",
                    "ActivityName": "PICNICKING",
                    "FacilityActivityDescription": "Picnicking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100037,
                    "FacilityID": "232867",
                    "ActivityName": "SAILING",
                    "FacilityActivityDescription": "Sailing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 106,
                    "FacilityID": "232867",
                    "ActivityName": "SWIMMING",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100015,
                    "FacilityID": "232867",
                    "ActivityName": "STAR GAZING",
                    "FacilityActivityDescription": "Star Gazing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100006,
                    "FacilityID": "232867",
                    "ActivityName": "WATER ACTIVITIES",
                    "FacilityActivityDescription": "Water Activities",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "232867",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232867",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232867",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232867",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "232867",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic & Cultural Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232867",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232867",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100043,
                    "FacilityID": "232867",
                    "ActivityName": "AMPHITHEATER",
                    "FacilityActivityDescription": "Amphitheater",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100009,
                    "FacilityID": "232867",
                    "ActivityName": "BERRY PICKING",
                    "FacilityActivityDescription": "Berry Picking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100026,
                    "FacilityID": "232867",
                    "ActivityName": "EVENING PROGRAMS",
                    "FacilityActivityDescription": "Evening Programs",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "38049aa83331b52d6a1fddbbf1b8b67b",
                    "LinkType": "Other",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "78c60074bd24164de27e7d9a44e7a592",
                    "LinkType": "Other",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "e143cb7b5278fe9376fd93f1d50ad456",
                    "LinkType": "Other",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71653_HOOD.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "95eacc5d-d223-4d5d-a2ae-af3979a65f6a",
                    "MediaType": "Image",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "Mt Hood with sailboat",
                    "Subtitle": "",
                    "Description": "Mt. Hood and Timothy Lake with sailboat",
                    "EmbedCode": "",
                    "Height": 560,
                    "Width": 1600,
                    "URL": "https://cdn.recreation.gov/public/2018/08/13/21/49/3826adf6-e654-4d89-b854-4d6e9d400243_1600.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "552ec1cd-30b3-44ae-be3b-fe2e9175d280",
                    "MediaType": "Image",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "Hoodview CG Map 2020",
                    "Subtitle": "",
                    "Description": "Hoodview Campground Map - Updated for 2020 Season",
                    "EmbedCode": "",
                    "Height": 541,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/12/23/16/40/232867_2510925c-2d9f-4ba3-9cb4-1c26740c9286_700.png",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573646",
                    "MediaType": "Image",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "Mt Hood",
                    "Subtitle": "",
                    "Description": "Mt Hood",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66919.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573762",
                    "MediaType": "Image",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "SUP on Timothy Lake",
                    "Subtitle": "",
                    "Description": "SUP on Timothy Lake",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67051.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "f91efa29-9515-40af-91ab-5aa1b2d701b0",
                    "MediaType": "Image",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "Hoodview view of Mount Hood",
                    "Subtitle": "",
                    "Description": "View of Mount Hood from Hoodview Campground",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/03/22/54/232867_fa1ee156-82b8-493b-9f84-deeb27e5275d_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "d2ed4c35-3f7d-4710-afa1-19e18762a576",
                    "MediaType": "Image",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "View of Mount Hood from Hoodview Campground",
                    "Subtitle": "",
                    "Description": "Mt Hood from Hoodview Campground",
                    "EmbedCode": "",
                    "Height": 810,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/12/03/22/56/232867_5d67e170-2cfb-4f1a-a375-043ead73e86b_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2573764",
                    "MediaType": "Image",
                    "EntityID": "232867",
                    "EntityType": "Facility",
                    "Title": "Hoodview Trees",
                    "Subtitle": "",
                    "Description": "Forest canopy",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67054.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232835",
            "LegacyFacilityID": "71618",
            "OrgFacilityID": "AN371618",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "STILL CREEK",
            "FacilityDescription": "<h2>Overview</h2>\nStill Creek Campground lies in the shadows of majestic Mt. Hood, in Oregon's Mt. Hood National Forest. It is one of the closest campgrounds to the mountain, and offers access to a variety of recreational opportunities. The surrounding area contains hiking, mountain biking and horseback riding trails, as well as numerous mountain lakes, rivers and creeks.<h2>Recreation</h2>\nA variety of hiking, mountain biking and horseback riding trails can be accessed from the campground, including the historic Barlow Trail. The somewhat primitive, 1-mile trail connects the campground with the town of Government Camp.\n<br /><br />\nFly-fishing is a popular activity on Still Creek. Anglers can expect a variety of trout and occasional whitefish and salmon.<h2>Facilities</h2>\nThe campground offers more than two dozen single-family sites for tent and RV camping. Utility hookups are not provided and parking surfaces are an assortment of dirt, gravel and paved. Water disposal sites are scattered throughout the campground.\n<br /><br />\nSites are equipped with tables and campfire rings with grills. Accessible vault toilets and drinking water are provided. Firewood is available for purchase at or near the campground.<h2>Natural Features</h2>\nThe campground sits on the banks of Still Creek just south Mt. Hood at an elevation of about 3,700 feet. It is surrounded by a lush forest of mixed conifers, including cedar, pine and fir trees. A dense understory of shrubs makes for ample privacy between sites. The creek can be heard throughout the campground.\n<h2>Nearby Attractions</h2>\nA fork on Forest Road 1825 that accesses the campground will lead to the trailhead for spectacular Ramona Falls on the Sandy River. The 7.1-mile, moderately difficult trail leads to cascading waterfalls and is one of the most popular hikes in the Mt. Hood National Forest.\n<br /><br />\nTimberline Lodge, a National Historic Landmark on Mt. Hood, is located within seven miles of Still Creek Campground. Sightseeing and a variety of recreational opportunities are available. The area is a popular snow sports playground for most of the year.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Portland, travel east on Highway 26 to Government Camp. Continue 1 mile east of Government Camp. The campground is on the south side of the highway.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7355556,
                    45.2958333
                ]
            },
            "FacilityLongitude": -121.7355556,
            "FacilityLatitude": 45.2958333,
            "Keywords": "STIC,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438183",
                    "FacilityID": "232835",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "MT. HOOD",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 8,
                    "FacilityID": "232835",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic Sites",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232835",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232835",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Downhill Skiing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 22,
                    "FacilityID": "232835",
                    "ActivityName": "WINTER SPORTS",
                    "FacilityActivityDescription": "Snowmobile Trails",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232835",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232835",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232835",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "2013fb3b47f6e127acf67bdb235a55e4",
                    "LinkType": "Other",
                    "EntityID": "232835",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "262f79c2607044172fdb8f9ea892dc78",
                    "LinkType": "Other",
                    "EntityID": "232835",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "ddcfcdef08a0aa47e3403055648c7e7c",
                    "LinkType": "Other",
                    "EntityID": "232835",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "14902c51b5a8cb2bc915c947f383cb5c",
                    "LinkType": "Other",
                    "EntityID": "232835",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71618_STIC.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573476",
                    "MediaType": "Image",
                    "EntityID": "232835",
                    "EntityType": "Facility",
                    "Title": "STILL CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66854.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573446",
                    "MediaType": "Image",
                    "EntityID": "232835",
                    "EntityType": "Facility",
                    "Title": "STILL CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66820.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573427",
                    "MediaType": "Image",
                    "EntityID": "232835",
                    "EntityType": "Facility",
                    "Title": "STILL CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66798.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573410",
                    "MediaType": "Image",
                    "EntityID": "232835",
                    "EntityType": "Facility",
                    "Title": "STILL CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66775.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573430",
                    "MediaType": "Image",
                    "EntityID": "232835",
                    "EntityType": "Facility",
                    "Title": "STILL CREEK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66802.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "234720",
            "LegacyFacilityID": "107683",
            "OrgFacilityID": "AN407683",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "Bear Springs Campground",
            "FacilityDescription": "<h2>Overview</h2>\nBear Springs Campground is an ideal destination for families and groups that enjoy the outdoors in the beautiful Pacific Northwest. It offers spacious group sites, single-family sites, and a day use area with a picnic shelter amid a forest of towering trees.<h2>Recreation</h2>\nBear Springs is not far from some great wilderness spots, including mountain lakes and streams, as well as trails and historic sites. A variety of short hiking and off-highway vehicle trails are available nearby for exploration. The Mt. Hood area and Government Camp are within a short drive from the campground. For water enthusiasts, rafting and kayaking opportunities abound on the nearby Deschutes River.  Picnicking is also a popular activity.<h2>Facilities</h2>\nThe campground offers single-family and group sites for tent and RV camping. Each site is equipped with a table and campfire ring with grill. Vault toilets, drinking water and trash collection are provided, but utility hookups are not available. Parking surfaces are gravel and dirt. Firewood can be purchased from the host.<h2>Natural Features</h2>\nThe campground is located on the southeastern edge of Mt. Hood National Forest at an elevation of 3,000 feet. It is situated among towering pine and fir trees, but the beauty of the campground is its secluded feel. Deer and other wildlife are common in the area.\n<h2>Nearby Attractions</h2>\nBear Springs is near the Warm Springs Tribal Lands and is approximately 19 miles from Government Camp, where visitors may enjoy summertime snow skiing.  It is also approximately 24 miles from the Deschutes River and less than one mile to Spring Drive RV Campground.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "<b> From Sandy: </b> Travel east on Highway 26 for 48 miles to the Highway 26/I-216 junctions. Turn left onto I-216 and travel east for 4 and 1/4 miles. Turn Right at Bear Springs campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.5325,
                    45.1252778
                ]
            },
            "FacilityLongitude": -121.5325,
            "FacilityLatitude": 45.1252778,
            "Keywords": "",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20440112",
                    "FacilityID": "234720",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Maupin",
                    "PostalCode": "97037",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "234720",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "234720",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "8b2820f91e4d8f71209df9c8c1a726d1",
                    "LinkType": "Other",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "92dad2f146856ab70aa071180b2fc867",
                    "LinkType": "Other",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "2c0be6636a0c9a6579cd7fb3ba23c951",
                    "LinkType": "Other",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "2154dd031c214887b7c4e14acd5e2f3f",
                    "LinkType": "Other",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/107683_BSGC.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2581355",
                    "MediaType": "Image",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "BEAR SPRINGS GROUP CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/74122.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2581497",
                    "MediaType": "Image",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "BEAR SPRINGS GROUP CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/74302.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2581420",
                    "MediaType": "Image",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "BEAR SPRINGS GROUP CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/74210.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2581414",
                    "MediaType": "Image",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "BEAR SPRINGS GROUP CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/74203.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2581389",
                    "MediaType": "Image",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "BEAR SPRINGS GROUP CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/74168.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2581417",
                    "MediaType": "Image",
                    "EntityID": "234720",
                    "EntityType": "Facility",
                    "Title": "BEAR SPRINGS GROUP CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/74207.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232834",
            "LegacyFacilityID": "71617",
            "OrgFacilityID": "AN371617",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "RILEY HORSE CAMPGROUND",
            "FacilityDescription": "<h2>Overview</h2>\nRiley Campground is an equestrian facility located northwest of Oregon's majestic Mt. Hood. Horse corrals are tucked into the forest near the campsites, and several horseback riding trails can be accessed from the campground. A variety of recreational and sightseeing opportunities are available for visitors to enjoy.<h2>Recreation</h2>\nSeveral hiking, biking and horseback riding trails can be accessed from the campground, including the 5.3-mile Cast Creek Trail, which was reconstructed in 1998 and leads from the campground to the Zigzag Mountain Trail. Combined with the nearby 4.9-mile Horseshoe Ridge Trail and part of the Zigzag Mountain Trail, visitors can make a nearly 14-mile excursion. The Sandy River Trail follows the river and stretches about 3 miles.\n<br /><br />\nFishing is available in nearby Lost Creek, as well as the Sandy River, which is not far from the campground. Anglers can expect a variety of trout, salmon and whitefish. The rivers are popular for fly fishing. Scenic drives and picnicking are also popular activities.<h2>Facilities</h2>\nThe campground offers single-family equestrian campsites.  Most of the sites are equipped with horse corrals or cross rail hitching posts, tables and campfire rings with grills. Accessible vault toilets and drinking water are provided. Horse owners are responsible for cleaning up after their horses.\n<br /><br />\nThe campsites are intended for equestrians, but may be used by others.  McNeil Campground (1/4 mile away) and Lost Creek (1 &Atilde;?&Acirc;&frac12; miles away) are good alternative sites for those without horses.  McNeil does not accept reservations.  Horse corrals or hitching racks are provided at the sites.<h2>Natural Features</h2>\nThe campground is situated in the Old Maid Flat geologic area of Mt. Hood National Forest at an elevation of about 2,100 feet. It sits alongside Lost Creek and is near the Sandy Wild and Scenic River. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nA deviation from the road coming into the campground (Forest Road 1825), will lead to a trailhead for spectacular Ramona Falls, on the Sandy River. The 7.1-mile, moderately difficult trail leads to cascading waterfalls and is one of the most popular hikes in Mt. Hood National Forest.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Sandy, travel Highway 26 for 18 miles to Zigzag. Turn north onto Lolo Pass Road. Continue for about 4 miles, then turn right on Forest Road 1825 and continue for less than a mile. Bear right, staying on Forest Road 1825, and cross the Sandy River Bridge. Continue for another half-mile, to Forest Roads 1825-382. Turn right, cross Lost Creek Bridge, and the campground will be almost immediately on the right.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.8594444,
                    45.3813889
                ]
            },
            "FacilityLongitude": -121.8594444,
            "FacilityLatitude": 45.3813889,
            "Keywords": "RILE,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438182",
                    "FacilityID": "232834",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "MT. HOOD",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 24,
                    "FacilityID": "232834",
                    "ActivityName": "VISITOR CENTER",
                    "FacilityActivityDescription": "Ranger Station",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 15,
                    "FacilityID": "232834",
                    "ActivityName": "HORSEBACK RIDING",
                    "FacilityActivityDescription": "Horseback Riding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232834",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232834",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232834",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "5ff88ddd941b68643ffb02ff7f0d373e",
                    "LinkType": "Other",
                    "EntityID": "232834",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "17ffb9f4246065acfc0dcb7f29f908e3",
                    "LinkType": "Other",
                    "EntityID": "232834",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "b49b1337fa7ee13b8456da8960720a6d",
                    "LinkType": "Other",
                    "EntityID": "232834",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "fcc94af877297cf97fadafa16612541c",
                    "LinkType": "Other",
                    "EntityID": "232834",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71617_RILE.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573438",
                    "MediaType": "Image",
                    "EntityID": "232834",
                    "EntityType": "Facility",
                    "Title": "RILEY HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66810.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573424",
                    "MediaType": "Image",
                    "EntityID": "232834",
                    "EntityType": "Facility",
                    "Title": "RILEY HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66794.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573428",
                    "MediaType": "Image",
                    "EntityID": "232834",
                    "EntityType": "Facility",
                    "Title": "RILEY HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66800.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573461",
                    "MediaType": "Image",
                    "EntityID": "232834",
                    "EntityType": "Facility",
                    "Title": "RILEY HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66836.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573482",
                    "MediaType": "Image",
                    "EntityID": "232834",
                    "EntityType": "Facility",
                    "Title": "RILEY HORSE CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66863.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "234239",
            "LegacyFacilityID": "75089",
            "OrgFacilityID": "AN375089",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "CLACKAMAS LAKE HISTORIC CABIN",
            "FacilityDescription": "<h2>Overview</h2>\nClackamas Lake Historic Cabin gives campers an old-fashioned cabin experience with its well-preserved features, including a massive rock chimney, knot-free interior paneling and hand-wrought iron work. It provides access to a number of outdoor recreation opportunities as well as its namesake lake.<h2>Recreation</h2>\nClackamas Lake is a great place for fishing, swimming and non-motorized boating. Anglers can expect a catch of cutthroat, brook, rainbow and some German brown trout. A variety of wildlife make its home in the area as well. Nearby, the 1,400-acre Timothy Lake provides opportunities for picnicking as well as water-related recreation, including the use of power boats.\n<br /><br />\nHiking, mountain biking and horseback riding are also enjoyed by visitors to the area. The 2.2-mile Miller Trail begins in the neighboring campground and connects trekkers to the lengthy but scenic Pacific Crest Trail, which extends more than 2,650 miles, from Canada to Mexico. Additional trails, to scenic Little Crater Lake and to the Mt. Jefferson Wilderness area, are also available in the area. A Northwest Forest Pass or Mount Hood Recreation day use fees are in effect at nearby trails and sites.<h2>Facilities</h2>\nThe 1,300 square-foot, two-story cabin has a living room, kitchen, dining area, sunroom, bathroom with flush toilets and a shower, and three bedrooms with beds and mattresses. The cabin can accommodate up to eight people. The kitchen is equipped with a propane cook stove and oven, refrigerator, cooking pots and pans, and cooking and eating utensils and dishes.\n<br /><br />\nThe cabin is heated by a fireplace insert in the living room. Firewood is provided. Hot and cold running water is always available. The cabin has propane lighting available from 8 a.m. to 10 a.m. and again from 6 p.m. to 10 p.m. Propane lanterns provide interior light outside of these hours. A rustic generator does not allow use of any plug-in electrical appliances, such as TVs, stereos, DVD players, computer, hair dryers, etc.\n<br /><br />\nGuests will need to bring sleeping bags or bedding, towels and wash cloths, food and personal gear, as well as a flashlight or lantern for emergencies, a first aid kit, insect repellent, sunscreen and dish soap, among other necessities. Please bring garbage bags and clean the facility before leaving. This is a &quot;Pack it in, Pack it out&quot; site.\n<br /><br />\nGuests can access the cabin by vehicle, as it is open from just before Memorial Day weekend through October each year. Snow conditions may impact travel. Guests are responsible for their own travel arrangements and safety.<h2>Natural Features</h2>\nThis historically significant, two-story cabin was built by the Civilian Conservation Corps in 1933 to house workers. It is a classic example of the Forest Service rustic architectural style of Depression Era administration buildings. Across the road is the old District Ranger's office, which is now a two-room visitor center.\n<br /><br />\nThe cabin is located a quarter-mile from the small, 3-acre Clackamas Lake and just 3 miles from the larger Timothy Lake, at an elevation of 3,400 feet. It is surrounded by tall trees and is part of a 4-acre compound and is listed on the National Register of Historic Places.\n<h2>Nearby Attractions</h2>\nThe cabin is less than 40 miles from Mt. Hood, where a historic lookout provides scenic views of the snow-capped mountain. Hiking and year-round skiing is also available there.\n<br /><br />\nThe nearest store is in the town of Wapinitia, which is 15 miles away on Highway 26.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Sandy, Oregon, travel east on Highway 26 for approximately 40 miles to Skyline Road (Road 42). Turn right on Skyline Road and travel south for 8.3 miles to the intersection of Forest Service Roads 42 and 57. Continue on Forest Service Road 42 for a quarter-mile. The Clackamas Lake Historic Ranger's Cabin is on the left. \n<br /><br />\n<a href=\"http://www.fs.usda.gov/main/mthood/maps-pubs\">Maps</a> are available online or for purchase by calling the Zigzag Ranger District.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7488889,
                    45.0991667
                ]
            },
            "FacilityLongitude": -121.7488889,
            "FacilityLatitude": 45.0991667,
            "Keywords": "CLCA,Clackamas Lake Guard Station,Clackamas Lake Ranger Station,Clackamas Lake Cabin,Clackamas Lake Historic,Clackamas Lake Ranger's Cabin,Clackamas Lake Guard Cabin,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20439600",
                    "FacilityID": "234239",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "FOREST RD 42",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "ZIGZAG",
                    "PostalCode": "97049",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 9,
                    "FacilityID": "234239",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "234239",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic Sites",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "234239",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "234239",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "234239",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 34,
                    "FacilityID": "234239",
                    "ActivityName": "SWIMMING SITE",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "234239",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 24,
                    "FacilityID": "234239",
                    "ActivityName": "VISITOR CENTER",
                    "FacilityActivityDescription": "Ranger Station",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "234239",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "e102a3843f50db6018fe5c8d751f6491",
                    "LinkType": "Other",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "cceefb9fbbc1ddf8c4c2de1f34b38f83",
                    "LinkType": "Other",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "bdc55dfd254d0365b992741b9b131803",
                    "LinkType": "Other",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "9e224876880d71e19cc4273a1739bafd",
                    "LinkType": "Other",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/75089_CLCA.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2579348",
                    "MediaType": "Image",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE HISTORIC CABIN",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72350.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2579405",
                    "MediaType": "Image",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE HISTORIC CABIN",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72418.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2579355",
                    "MediaType": "Image",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE HISTORIC CABIN",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72360.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2579493",
                    "MediaType": "Image",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE HISTORIC CABIN",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72516.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2579466",
                    "MediaType": "Image",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE HISTORIC CABIN",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72486.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2579360",
                    "MediaType": "Image",
                    "EntityID": "234239",
                    "EntityType": "Facility",
                    "Title": "CLACKAMAS LAKE HISTORIC CABIN",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/72366.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232865",
            "LegacyFacilityID": "71651",
            "OrgFacilityID": "AN371651",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "PINE POINT ",
            "FacilityDescription": "<h2>Overview</h2>\nPine Point Campground is located on the shores of Timothy Lake in the shadow of Oregon's Mt. Hood. It is a beautiful place for individuals, families and larger groups to camp and enjoy nature, as miles of scenic trails surround the campground and access to the lake provides endless recreation possibilities.\n<h2>Recreation</h2>\nProximity to Timothy Lake allows campers to enjoy a variety of water-related recreation activities, including boating and sailing, as well as swimming, windsurfing and fishing. Anglers can expect a catch of kokanee salmon and a variety of trout. \n   \nA range of trails are located in the area. The Timothy Lake Trail is popular for hiking, mountain biking and horseback riding. The 12 miles of relatively level terrain loops trekkers around the lake, providing scenic views of the area. It connects to the Pacific Crest National Scenic Trail, a lengthy hike that extends across three states, from the borders of Canada and Mexico. Portions of that trail also lead southwest to Clackamas Lake Campground.\n   \nThe Clackamas Lake Ranger Station Historic District is less than 3 miles from the campground. It was built to house forest service workers in the early 1900s. The rustic architecture and historic nature of the buildings and the surrounding area, draws thousands of tourists each year.<h2>Facilities</h2>\n<p>The campground offers dozens of single-family campsites and five large-group campsites, available for tent and RV camping. Sites are equipped with tables and campfire rings with grills. Accessible vault toilets and drinking water are provided. An on-site host is available at the campground.</p>\n\n<p>The nearest gas station/convenience store is about 18 miles away, west on Hwy. 26. The nearest grocery store is in Government Camp, about 23 miles away, west on Hwy. 26.</p>\n<h2>Natural Features</h2>\nThe campground is situated on the south shore of the roughly 1,400-acre lake, at an elevation of 3,400 feet. Timothy Lake was created in 1956 as a storage reservoir for the Oak Grove Hydroelectric Project. It is one of the larger lakes in the Mt. Hood National Forest. The campground is nestled in a mixed conifer forest, with many sites with views of the water's edge.\n\n<h2>Nearby Attractions</h2>\nPine Point is about 28 miles from the base of majestic Mt. Hood, the highest point in Oregon. The historic Timberline Lodge in Government Camp offers scenic views of the snow-capped mountain.\n<h2>Charges &amp; Cancellations</h2>\n<p>A service fee will apply if you change or cancel your reservation. Late cancellations are subject to additional fees.  For details, see the Recreation.Gov, Rules & Reservation Policies.</p>\n",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "Payment in-full will be charged to your credit card upon completion of the reservation. A non-refundable online reservation fee may be charged for some facilities.\n",
            "FacilityDirections": "From Sandy, Oregon, travel east on Highway 26 for approximately 40 miles to Skyline Road/Road 42. Turn right on Skyline Road and continue south for about 9 miles. Turn right on Forest Service Road 57 and travel west for 3 miles, then turn right again at the Pine Point Campground entrance sign.\n",
            "FacilityPhone": "503-464-8515",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7930556,
                    45.1094444
                ]
            },
            "FacilityLongitude": -121.7930556,
            "FacilityLatitude": 45.1094444,
            "Keywords": "PNNE,MT. HOOD NF - FS,Timothy Lake",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438213",
                    "FacilityID": "232865",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "Skyline Rd",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Timothy Lake",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232865",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232865",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232865",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "232865",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic & Cultural Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232865",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100037,
                    "FacilityID": "232865",
                    "ActivityName": "SAILING",
                    "FacilityActivityDescription": "Sailing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100015,
                    "FacilityID": "232865",
                    "ActivityName": "STAR GAZING",
                    "FacilityActivityDescription": "Star Gazing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 106,
                    "FacilityID": "232865",
                    "ActivityName": "SWIMMING",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100006,
                    "FacilityID": "232865",
                    "ActivityName": "WATER ACTIVITIES",
                    "FacilityActivityDescription": "Water Activities",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100019,
                    "FacilityID": "232865",
                    "ActivityName": "WATER ACCESS",
                    "FacilityActivityDescription": "Water Access",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100008,
                    "FacilityID": "232865",
                    "ActivityName": "CANOEING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 32,
                    "FacilityID": "232865",
                    "ActivityName": "DAY USE AREA",
                    "FacilityActivityDescription": "Day Use Area",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100026,
                    "FacilityID": "232865",
                    "ActivityName": "EVENING PROGRAMS",
                    "FacilityActivityDescription": "Evening Programs",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232865",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 15,
                    "FacilityID": "232865",
                    "ActivityName": "HORSEBACK RIDING",
                    "FacilityActivityDescription": "Horseback Riding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 10,
                    "FacilityID": "232865",
                    "ActivityName": "INTERPRETIVE PROGRAMS",
                    "FacilityActivityDescription": "Interpretive Programs",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100000,
                    "FacilityID": "232865",
                    "ActivityName": "MOTOR BOAT",
                    "FacilityActivityDescription": "Motor Boat",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100018,
                    "FacilityID": "232865",
                    "ActivityName": "NON-MOTORIZED BOATING",
                    "FacilityActivityDescription": "Non-Motorized Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 105,
                    "FacilityID": "232865",
                    "ActivityName": "PADDLING",
                    "FacilityActivityDescription": "Paddling",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 104,
                    "FacilityID": "232865",
                    "ActivityName": "PHOTOGRAPHY",
                    "FacilityActivityDescription": "Photography",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 20,
                    "FacilityID": "232865",
                    "ActivityName": "PICNICKING",
                    "FacilityActivityDescription": "Picnicking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232865",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100060,
                    "FacilityID": "232865",
                    "ActivityName": "CRAWFISHING",
                    "FacilityActivityDescription": "Crawfishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100043,
                    "FacilityID": "232865",
                    "ActivityName": "AMPHITHEATER",
                    "FacilityActivityDescription": "Amphitheater",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100009,
                    "FacilityID": "232865",
                    "ActivityName": "BERRY PICKING",
                    "FacilityActivityDescription": "Berry Picking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100017,
                    "FacilityID": "232865",
                    "ActivityName": "BIRDING",
                    "FacilityActivityDescription": "Birding",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "e3a28bd960200c514d99876f0e1f0a00",
                    "LinkType": "Other",
                    "EntityID": "232865",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "28a61692bc7cfbbf145c4370338ea8a0",
                    "LinkType": "Other",
                    "EntityID": "232865",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "83a07d67c7f9f6c8f121762243bccb82",
                    "LinkType": "Other",
                    "EntityID": "232865",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71651_PNNE.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "d7e2bf84-9277-48da-8f84-7338c206002d",
                    "MediaType": "Image",
                    "EntityID": "232865",
                    "EntityType": "Facility",
                    "Title": "",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 338,
                    "Width": 450,
                    "URL": "https://cdn.recreation.gov/public/2018/08/06/18/07/cf101722-fdf3-4d7d-8ab3-f0b35efc1bcc_450.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "b7bd60f0-37b7-4f83-be36-bd56debce8be",
                    "MediaType": "Image",
                    "EntityID": "232865",
                    "EntityType": "Facility",
                    "Title": "",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 396,
                    "Width": 1600,
                    "URL": "https://cdn.recreation.gov/public/2018/08/06/18/07/e588fde7-615c-4954-b672-e1651663ad9b_1600.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573667",
                    "MediaType": "Image",
                    "EntityID": "232865",
                    "EntityType": "Facility",
                    "Title": "PINE POINT ",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66941.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "bb2fe927-05d1-455f-a66c-0ef2f50ee61f",
                    "MediaType": "Image",
                    "EntityID": "232865",
                    "EntityType": "Facility",
                    "Title": "Pine Point Day Use Area",
                    "Subtitle": "",
                    "Description": "Pine Point Day Use Area",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/05/19/20/17/232865_c994674a-668d-469a-9288-ee68e1554d03_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ]
        },
        {
            "FacilityID": "232844",
            "LegacyFacilityID": "71627",
            "OrgFacilityID": "AN371627",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "RIPPLEBROOK",
            "FacilityDescription": "<h2>Overview</h2>\nRipplebrook Campground is a charming facility for nature enthusiasts and lies in a beautiful forest setting. Fly fishing and whitewater rafting are popular near the campground, as it neighbors the Clackamas Wild and Scenic River. The small facility is geared more toward tent camping, however, tent trailers and RVs under 19 feet are welcome.<h2>Recreation</h2>\nFishing is very popular in the Clackamas River and anglers can expect a catch of winter steelhead, spring chinook and late summer kokanee salmon, as well as other species of freshwater fish. Whitewater rafting is also a favorite pastime. The Clackamas provides miles of wild water as it bends through the scenic Cascade Range.\n<br /><br />\nThe 5-mile Riverside National Recreation Trail, popular for hiking and mountain biking, is located not far from the campground. The surrounding area provides numerous additional trail opportunities.<h2>Facilities</h2>\nThe campground offers single-family sites for tent and small RV camping.  Each site is equipped with a table and campfire ring with grill. Accessible vault toilets are provided. Utility hookups are not available. Parking surfaces are paved and gravel.<h2>Natural Features</h2>\nThe campground borders the Oak Fork of the Clackamas River in a dense forest of mature maple, cedar and fir trees. Large shrubs and ferns blanket the forest floor, providing privacy between campsites. The campground is situated at an elevation of about 1,400 feet. The Ripplebrook Ranger Station and Ripplebrook Pond are close by.\n<br /><br />\nThe river provides habitat for the federally protected bald eagle and northern spotted owl, as well as an occasional peregrine falcon. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nBagby Hot Springs is located about 14 miles southwest of the campground. A popular site for soaking and relaxing, the springs are in a heavily wooded area in the scenic Cascade Range. The available bathhouses are fed by three major hot water springs and several minor outlets in the area. A historic guard station was built there in 1913.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, travel east on Highway 224 for 26 miles to the campground, which is just past the Ripplebrook Camp Store.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.0405556,
                    45.0797222
                ]
            },
            "FacilityLongitude": -122.0405556,
            "FacilityLatitude": 45.0797222,
            "Keywords": "RIPP,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438192",
                    "FacilityID": "232844",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 25,
                    "FacilityID": "232844",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232844",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232844",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "d5b48deb898082a3461d316381b9e206",
                    "LinkType": "Other",
                    "EntityID": "232844",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "fdbd6bb2bb81ee9fbc8c081ed0295945",
                    "LinkType": "Other",
                    "EntityID": "232844",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "1f67ed7e9633c1aee6f783ce7e3112e4",
                    "LinkType": "Other",
                    "EntityID": "232844",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "3e6467342a379e032b4643fa0ce8ae9d",
                    "LinkType": "Other",
                    "EntityID": "232844",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71627_RIPP.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573719",
                    "MediaType": "Image",
                    "EntityID": "232844",
                    "EntityType": "Facility",
                    "Title": "RIPPLEBROOK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66999.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573651",
                    "MediaType": "Image",
                    "EntityID": "232844",
                    "EntityType": "Facility",
                    "Title": "RIPPLEBROOK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66924.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573742",
                    "MediaType": "Image",
                    "EntityID": "232844",
                    "EntityType": "Facility",
                    "Title": "RIPPLEBROOK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67027.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573781",
                    "MediaType": "Image",
                    "EntityID": "232844",
                    "EntityType": "Facility",
                    "Title": "RIPPLEBROOK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67073.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573632",
                    "MediaType": "Image",
                    "EntityID": "232844",
                    "EntityType": "Facility",
                    "Title": "RIPPLEBROOK",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66903.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "233326",
            "LegacyFacilityID": "72353",
            "OrgFacilityID": "AN372353",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "TILLY JANE A-FRAME",
            "FacilityDescription": "<h2>Overview</h2>\nThe Tilly Jane A-Frame is an ideal getaway for individuals, groups and families who enjoy the great outdoors in the beautiful Pacific Northwest.  The facility is one of the oldest structures on Mt. Hood and is a popular cabin used by winter recreationists. Peak season for use of the cabin is usually November through June.. It provides access to scenic terrain, specifically hiking, snowshoeing and backcountry skiing activities.\n<br/><br/>\nDuring the summer months (usually July-September) the A-Frame is easily accessed by taking a short quarter mile walk through the Tilly Jane Campground. During the winter months ( October-June), it serves as a winter retreat for persons hardy enough to make the effort to get to the cabin from the Tilly Jane Sno-Park. Winter conditions often exist for nine months of the year.  Visitors can ski to the cabin following a 9 mile gently sloping road or climb the historic Tilly Jane ski trail which is roughly 2.7 miles, with an elevation gain of 1,900 feet.  Skis or snowshoes are highly recommended!\n<br/><br/>\nGuests are responsible for their own travel arrangements and safety.  Backcountry travel experience is highly recommended.<h2>Recreation</h2>\nVisitors must hike, snowshoe or ski to the facility during the winter months.  During the summer season, it is possible to drive up and walk to the structure.  Multiple trails can be accessed from the A-Frame, some of which are well marked and others covered by snow for most of the year.\n  \nNearby trails offer a variety of day trips, including to the Cooper Spur Stone shelter which offers great views of the majestic Mt. Hood, St Helens, Mt. Adams and Mt. Rainer.<h2>Facilities</h2>\nThe 24-by-48, two story structure has a sleeping loft, accessed by a ladder that can accommodate up to 20 people.  More than one group may reserve the facility at the same time.  It is equipped with two picnic tables, benches, a few chairs and a wood stove for heating and boiling/melting snow.\n<br/><br/> \nIn warmer months, water can be found with a short walk to Tilly Creek.  We advise that all water be treated or boiled.  In winter, water can be obtained by digging an access hole to Tilly Creek or by melting snow using the pots provided at the cabin.  A primitive outhouse with a pit toilet is provided within the alcove of the structure.  You will need to bring your own toilet paper.\n<br/><br/>\nGuests will also need to provide sleeping bags and pads, warm clothing, headlamps, cooking pots/pans, stove and fuel, matches or a lighter.  It is best to treat your stay as a backpacking trip, bringing everything you'd need minus a tent.  Several lanterns and replacement mantels are available.  You will need to provide the one pound green propane canisters if you wish to use the lanterns.  Firewood and splitting tools are provided.<h2>Natural Features</h2>\nThe A-Frame is located high on the north side of Mt. Hood at an elevation of 5,700 feet.  It is one of five structures within the Cloud Cap/Tilly Jane Historic District.  It was built in the late 1930s by the Civilian Conservation Corps (CCC) and was used extensively by the American Legion in its early days.  The facility is surrounded by old growth trees and is roughly 1,000 feet below tree line.  It is operated and maintained by the all-volunteer, Oregon Nordic Club, under permit from the Forest Service.  A cook shed is adjacent to the A-Frame, but has been condemned by the Forest Service.",
            "FacilityTypeDescription": "Permit",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Hood River, OR -- South on Hwy 35 for 8.5 miles, past the Hood River Ranger Station.  Look for the Cooper Spur Inn sign and turn right off Hwy 35 (just North of Olallie trailhead).  Drive Forest Road 3512,  to Cooper Spur Inn.  Turn left onto the Cloud Cap/Tilly Jane Road #3512.  The first trailhead is just past the intersection with Cooper Spur ski area, with parking on the right and the trail head on the left side of the road. This is the trailhead used for winter travel (usually between October-June). Cloud Cap/Tilly Jane Road #3512 is gated/locked and not plowed in winter.  In summer months (usually between July-September), continue up the long winding Road #3512, veering left onto Road 630 near the top. Taking a right will lead you to the Cloud Cap and Snowshoe hut structures.  Park at the Tilly Jane Campground (NW Forest Pass required or parking permits available on site) and take the Tilly Jane Trail, 600B, a quarter mile to its intersection with the Tilly Jane A-Frame.",
            "FacilityPhone": "OREGON NORDIC CLUB CABIN EMAIL (BEST CONTACT METHOD): RESERVATIONS@TILLYJANECABINS.ORG ",
            "FacilityEmail": "reservations@tillyjanecabins.org",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.6480556,
                    45.3988889
                ]
            },
            "FacilityLongitude": -121.6480556,
            "FacilityLatitude": 45.3988889,
            "Keywords": "A Frame,Cloud Cap A Frame,Tilly Jane Warming Hut",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2020-10-22",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438669",
                    "FacilityID": "233326",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "C/O HOOD RIVER RANGER STATION",
                    "FacilityStreetAddress2": "6780 HIGHWAY 35",
                    "FacilityStreetAddress3": "",
                    "City": "Parkdale",
                    "PostalCode": "97041",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2018-11-26"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 32,
                    "FacilityID": "233326",
                    "ActivityName": "DAY USE AREA",
                    "FacilityActivityDescription": "Day Use Area",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "233326",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "233326",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "233326",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic & Cultural Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100040,
                    "FacilityID": "233326",
                    "ActivityName": "MOUNTAIN CLIMBING",
                    "FacilityActivityDescription": "Mountain Climbing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100055,
                    "FacilityID": "233326",
                    "ActivityName": "SKIING",
                    "FacilityActivityDescription": "Skiing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100053,
                    "FacilityID": "233326",
                    "ActivityName": "SLEDDING",
                    "FacilityActivityDescription": "Sledding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 28,
                    "FacilityID": "233326",
                    "ActivityName": "WILDERNESS",
                    "FacilityActivityDescription": "Wilderness",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "07fda8d38fc1f26257c13122d4c57543",
                    "LinkType": "Other",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "63eea62a23e674dc08e58b03e18be474",
                    "LinkType": "Other",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Oregon Nordic Club",
                    "URL": "http://onc.org/PDX-ONC"
                },
                {
                    "EntityLinkID": "0d5622470dd465111e57e0abb1193d7e",
                    "LinkType": "Other",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "fcc86740-be88-448f-844e-d93f8c75f5fb",
                    "MediaType": "Image",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane A Frame Interior",
                    "Subtitle": "",
                    "Description": "A Frame Interior",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/06/20/07/233326_90a7938d-debd-4df7-8728-76d5b5ad5956_700.jpg",
                    "Credits": "Eric Thornburg",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "30fa3752-9ffd-4218-9a8a-9ca053a97268",
                    "MediaType": "Image",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane A Frame Rear View",
                    "Subtitle": "",
                    "Description": "TJ A Frame Rear View Summer ",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/06/19/57/233326_2a05f125-8995-4c9e-a8b7-717e016a1255_700.jpg",
                    "Credits": "Eric Thornburg",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "487acce6-3e0a-4183-9187-c3e56622d452",
                    "MediaType": "Image",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane A Frame Winter",
                    "Subtitle": "",
                    "Description": "Winter view of the cabin entrance",
                    "EmbedCode": "",
                    "Height": 904,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/06/20/09/233326_e5d8c3ae-0692-4c7b-85f2-36ea2cf2c1da_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "38512fcb-7266-4306-a54a-3db2ec53e0aa",
                    "MediaType": "Image",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane A Frame Cabin",
                    "Subtitle": "",
                    "Description": "A Frame Front Entrance",
                    "EmbedCode": "",
                    "Height": 811,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/12/13/16/42/233326_57a278b4-c8b4-4392-9072-c6b6ab2854d7_1440.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "be189067-3eb0-4d93-9ca7-f2fb8ba927ab",
                    "MediaType": "Image",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "A Frame",
                    "Subtitle": "",
                    "Description": "Peak Winter Season",
                    "EmbedCode": "",
                    "Height": 960,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/12/13/16/55/233326_764bfd13-36c5-429a-8211-eea67cc076c7_1440.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "82a14c8c-06c6-4b92-adac-2cf73b3d451b",
                    "MediaType": "Image",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane A Frame Entrance",
                    "Subtitle": "",
                    "Description": "Summer view of the cabin entrance",
                    "EmbedCode": "",
                    "Height": 960,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/12/06/20/21/233326_03900538-ac4e-477b-a972-9660180ca9df_1440.jpg",
                    "Credits": "Eric Thornburg",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "d03a839b-fa2e-4107-b2b6-d65de4ae5446",
                    "MediaType": "Image",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane A Frame Early Winter",
                    "Subtitle": "",
                    "Description": "Side View early Winter",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/06/20/52/233326_bb8f385f-eb5e-40a8-9750-3e26179c130e_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "954c1658-3007-49cb-bf56-316b3597083b",
                    "MediaType": "Image",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Winter at the cabin",
                    "Subtitle": "",
                    "Description": "Rear view in winter - pre restoration",
                    "EmbedCode": "",
                    "Height": 925,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/17/44/233326_9dac9ca8-7e39-4873-ac1d-d84d373d2f56_1440.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "84d191ff-f132-4b73-b9e6-84699fd4d86d",
                    "MediaType": "Image",
                    "EntityID": "233326",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane A Frame cabin",
                    "Subtitle": "",
                    "Description": "Winter Peak Season at the A Frame",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/13/16/52/233326_18b8c16d-692b-4e33-b13e-f28e4d2e2bf9_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ]
        },
        {
            "FacilityID": "232873",
            "LegacyFacilityID": "71659",
            "OrgFacilityID": "AN371659",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "ROCK CREEK (OR)",
            "FacilityDescription": "<h2>Overview</h2>\nRock Creek Campground sits on the shores of scenic Rock Creek Reservoir in the pine-covered mountains of Mt. Hood National Forest. It is a family-friendly campground with many sites right on the water's edge. The campground provides access to a variety of recreational activities, as well as historic sites throughout the forest.<h2>Recreation</h2>\nThe reservoir is a popular spot for fishing, canoeing and boating, however, boats must have electric motors. Anglers can expect a catch of bass and bluegill, and the lake is regularly stocked with rainbow trout.\n<br /><br />\nAn unmarked trail connects the campground to nearby Sportsman Campground, which offers a network of off-road vehicle trails. \n<br /><br />\nA boat ramp, picnic area and hiking trail are available at the adjacent day use area.<h2>Facilities</h2>\nThe campground offers single-family sites for tent and RV camping. RVs over 35 feet are not recommended. Some sites are available on a first-come, first-served basis.\n<br /><br />\nEach site is equipped with a table and campfire ring with grill. Vault toilets and drinking water are provided, but utility hookups are not available. Water disposal locations can be found throughout the campground. Parking surfaces are gravel. Firewood can be purchased from host.<h2>Natural Features</h2>\nThe campground is situated in a stand of mixed oak and pine trees, along the southeastern shore of the 180-acre reservoir, which is rarely at capacity because it is used for irrigation purposes. At an elevation of about 4,600 feet, the campground provides scenic views of the adjacent lake and surrounding forest.\n<br /><br />\nA variety of wildlife make its home in the area and eagles are commonly spotted nesting.\n<h2>Nearby Attractions</h2>\nThe campground is about 30 miles from the town of Government Camp at the base of Mt. Hood. Year-round skiing, a variety of trailheads and many sightseeing opportunities can be found there.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Portland, travel east on Highway 26 for 42 miles. Take the Highway 35 exit to Hood River and travel northeast for 3 miles. Turn right on Forest Road 48 and travel 22 miles. Turn left on Forest Road 4810 and continue to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.3841667,
                    45.2175
                ]
            },
            "FacilityLongitude": -121.3841667,
            "FacilityLatitude": 45.2175,
            "Keywords": "ROKE,MT. HOOD NF - FS,ROCK CREEK,ROCK CREEK (OR),Rock Creek",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438221",
                    "FacilityID": "232873",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 34,
                    "FacilityID": "232873",
                    "ActivityName": "SWIMMING SITE",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "232873",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 24,
                    "FacilityID": "232873",
                    "ActivityName": "VISITOR CENTER",
                    "FacilityActivityDescription": "Comfort Station",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232873",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232873",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232873",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232873",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Boat Launch Ramp",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "89f3d3e60d1f5343b8ccaaf800b383d4",
                    "LinkType": "Other",
                    "EntityID": "232873",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "57638a8c1f1202d53f4d6b5e973954cc",
                    "LinkType": "Other",
                    "EntityID": "232873",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "3c144edd47d64fbb4be58a21cc873c88",
                    "LinkType": "Other",
                    "EntityID": "232873",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                }
            ],
            "MEDIA": []
        },
        {
            "FacilityID": "232856",
            "LegacyFacilityID": "71641",
            "OrgFacilityID": "AN371641",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "LAKE HARRIET ",
            "FacilityDescription": "<h2>Overview</h2>\nLake Harriet Campground sits on the eastern shores of crystal clear Lake Harriet. It is located between the Oak Grove Fork of the Clackamas River, which flows into the lake, and the nearby forest highway. It is a great location for camping, fishing and boating.\n<h2>Recreation</h2>\nBoating, canoeing and fishing on Lake Harriet are popular activities. There is a speed limit of 10 mph. The lake is stocked with rainbow trout each year, resulting in easy fly fishing. Anglers can also expect to catch cutthroat and brown trout, which spawn in the nearby river. The campground offers a boat ramp and fishing dock for easy lake access.\nThe nearby Oak Grove Fork of Clackamas River is also popular for fishing. Steelhead, chinook and kokanee salmon can often be caught there. Further down the river, the Clackamas provides class III-IV whitewater rafting. The river provides a perfect habitat for the bald eagle and northern spotted owl, as well as an occasional peregrine falcon.\nVisitors can also enjoy hiking in the Bull of the Woods Wilderness area, just south of the campground. Several primitive forest roads nearby are useful for mountain biking and the Cascades Scenic Byway, which follows the Clackamas River, runs near the campground.<h2>Facilities</h2>\nThe campground offers eight single-family campsites for tent and RV camping. Each site is equipped with tables and campfire rings with grills. Accessible vault toilets and drinking water are provided. \nA host is available on-site and firewood is available for purchase at the campground.<h2>Natural Features</h2>\nThe campground is surrounded by a sparse forest of alder trees that provide limited shade to the area. It is situated at an elevation of about 2,000 feet in the Mt. Hood National Forest. The 22-acre lake and surrounding wilderness rest in a narrow, heavily forested canyon of Oregon's Cascade Mountain Range.\n\n<h2>Nearby Attractions</h2>\nThe Ripplebrook Ranger Station is located just over 6 miles west of the campground. A variety of services can be found there, including a general store and visitor center.\n<h2>Charges &amp; Cancellations</h2>\n<p>A service fee will apply if you change or cancel your reservation. Late cancellations are subject to additional fees. For full details see Recreation.Gov, Rules & Reservation Policies.</p>\n",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "  Payment in-full will be charged to your credit card upon completion of the reservation. A non-refundable online reservation fee may be charged for some facilities.",
            "FacilityDirections": "<p>From Portland, take Highway 224 towards Estacada. Just past the Ripplebrook Campground, turn left on U.S. Forest Service Road 57, then take another left on U.S. Forest Service Road 4630. Follow signs for Lake Harriet.</p>\n\n",
            "FacilityPhone": "503-464-8515",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.9569444,
                    45.0736111
                ]
            },
            "FacilityLongitude": -121.9569444,
            "FacilityLatitude": 45.0736111,
            "Keywords": "HAR1,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438204",
                    "FacilityID": "232856",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "Oak Grove Fork Rd.",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Lake Harriet",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 9,
                    "FacilityID": "232856",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 32,
                    "FacilityID": "232856",
                    "ActivityName": "DAY USE AREA",
                    "FacilityActivityDescription": "Day Use Area",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232856",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 20,
                    "FacilityID": "232856",
                    "ActivityName": "PICNICKING",
                    "FacilityActivityDescription": "Picnicking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 104,
                    "FacilityID": "232856",
                    "ActivityName": "PHOTOGRAPHY",
                    "FacilityActivityDescription": "Photography",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "78871e6cd9a8a3ee57d4e60436029087",
                    "LinkType": "Other",
                    "EntityID": "232856",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "4a8d6729f35e7e4b9412c27ac39d86c8",
                    "LinkType": "Other",
                    "EntityID": "232856",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "9ad58836-7371-4284-8bad-69c0c9f340b0",
                    "MediaType": "Image",
                    "EntityID": "232856",
                    "EntityType": "Facility",
                    "Title": "Boat launch at Lake Harriet",
                    "Subtitle": "",
                    "Description": "Boat launch",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/03/23/46/232856_a28d4b26-5176-4a72-b41a-86651d3db612_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "fcbcf44a-9c52-415b-8859-04aeac98e562",
                    "MediaType": "Image",
                    "EntityID": "232856",
                    "EntityType": "Facility",
                    "Title": "Lake Harriet reservoir with buoys",
                    "Subtitle": "",
                    "Description": "Lake Harriet reservoir",
                    "EmbedCode": "",
                    "Height": 338,
                    "Width": 450,
                    "URL": "https://cdn.recreation.gov/public/2018/08/13/18/06/7bd4a01e-db90-44e9-8b77-659e7f0f3180_450.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "5f8fe860-bae6-4103-9c98-7bc66b252bce",
                    "MediaType": "Image",
                    "EntityID": "232856",
                    "EntityType": "Facility",
                    "Title": "Lake Harriet campsite with a small RV",
                    "Subtitle": "",
                    "Description": "Lake Harriet campsite",
                    "EmbedCode": "",
                    "Height": 810,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/12/03/23/44/232856_60f33247-65a3-45a6-a47b-042b24434764_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ]
        },
        {
            "FacilityID": "233305",
            "LegacyFacilityID": "72315",
            "OrgFacilityID": "AN372315",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "OLALLIE LAKE GUARD STATION CABIN",
            "FacilityDescription": "<h2>Overview</h2>\nOlallie Lake Guard Station Cabin gives campers an old-fashioned cabin experience with its well-preserved features, including a massive rock chimney, interior wood and hand-wrought iron work. It provides access to a number of outdoor recreation opportunities as well as its namesake lake. The cabin is at nearly 5,000 feet so the season can be delayed by late snows which restricts cabin access.<h2>Recreation</h2>\n<p>The Olallie Lake Guard Station Cabin is located in the heart of the Olallie Lake Scenic Area which has several lakes and miles of trails including the Pacific Crest Trail located adjacent to the cabin. Olallie Lake (240 arces in size) has non-motorized boating and excellent fishing. Rental row boats are available at the nearby Olallie Resort. The lake is stocked with rainbow trout. Swimming is allowed in all lakes except Olallie Lake. Some of the trails and most of the graveled roads are open for mountain biking.</p>\n<h2>Facilities</h2>\n<p>The four-room guard station has a kitchen, living room with two futon couches, a bunk bedroom and a loft with a queen bed. The cabin sleeps up to eight people. It has propane lights, a propane refrigerator, stove and oven, basic cooking pots, pans, dishes and eating utensils. A table and chairs is provided. A wood stove is available for heat. Firewood is provided. The cabin has a limited water supply to the kitchen sink with hot and cold water. A vault toilet is located about 75 feet from the cabin and is used by others. Cell phone coverage is not available at the cabin and very spotty in the entire Olallie Lake Scenic Area.</p>\n<p>Guests will need to bring sleeping bags or bedding, towels and wash cloths, paper towels, food and personal gear, as well as a flashlight or lantern for emergencies, a first aid kit, insect repellent (a must!), sunscreen and dish soap, among other necessities. Please bring garbage bags and clean the facility before leaving. Olallie Lake Resort is in charge of managing this cabin for the Forest Service. We are just next door and have personel onsite 24 hours a day.</p>\n\n<p>Guests can access the cabin by vehicle. Higher clearance or 4wd is preferable, but the cabin is accessible to 2wd passenger cars if they drive slow. Road conditions can be hampered by early or late snows. Guests are responsible for their own travel arrangements and safety..</p>\n<h2>Natural Features</h2>\nThis historically significant, two-story cabin was built by the Civilian Conservation Corps in the 1930’s for the Forest Ranger that patrolled the area. It is a classic example of the Forest Service rustic architectural style of Depression Era administration buildings. The cabin is located on the far south end of the Mt. Hood National Forest. It’s location near the shore of Olallie Lake affords visitors views of the north face of 10,497-foot Mt. Jefferson and 7,215-foot Olallie Butte, in the Cascade Mountains. The facility was listed on the National Register of Historic Places in 1991. Olallie is Chinook jargon for \"berry.\"\n<h2>contact_info</h2>\nFor local information, please call (503) 853-3481 or call (503) 668-1700 for general information.\n<h2>Nearby Attractions</h2>\n<p>The Olallie Lake Resort is near the cabin. There is a store there that sells some food, bait, etc. The nearest town is Detroit which is 36 miles south. CJ’s Chevron is the north 40 miles on Hwy 26. </p>\n",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "<p>The best route from the Portland area is east on HWY 224 from 1-205 through Estacada.</p>\n<p>Continue past Ripplebrook Ranger Station onto Forest Hwy 46. HWY 224 turns into HWY 46.</p>\n<p>Go approximately 25 miles; you will want to watch your odometer as the turn off to FSR (Forest Service Road) 4690 is easy to miss.  “Olallie” is painted on the road at the junction of 46 and 4690.</p>\n<p>Turn left onto FSR 4690.</p>\n<p>Once on FSR 4690 the road is winding and travel is very slow. Stay straight on FSR 4690 and follow the signs 13 miles to Olallie Lake (first sign is at the gate about 8 miles in when the road becomes FSR 4220).     </p>\n<p>--------------------------------------------------------------------------------------------------------</p>\n<p>The best route from the Salem area is through Detroit to Forest Hwy 46.  </p>\n<p>Turn left just as you pass over the bridge into Detroit.  Follow Forest Hwy 46 for approximately 25 miles. It is best to watch your odometer.</p>\n<p>At approximately 25 miles turn right onto FSR 4690. “Olallie” is painted on the road at the junction of 46 and 4690.  </p>\n<p>Once on FSR 4690 the road is winding and travel is very slow. Stay straight on FSR 4690 and follow the signs 13 miles to Olallie Lake (first sign is at the gate about 8 miles in when the road becomes FSR 4220).          </p>\n<p> --------------------------------------------------------------------------------------------------------</p>\n<p>From Mt Hood: </p>\n<p>From Highway 26 turn on to Skyline Road  FSR 42, which is approximately 12 miles south of Government Camp and follow the signs 35 miles to the Lake.  You will have to watch closely for the left turn onto FSR 4220. Please note this is considered a primitive road. </p>\n<ul>\n<li>The roads are closed in the winter.</li>\n</ul>\n",
            "FacilityPhone": "503-630-6861",
            "FacilityEmail": "olallielakeresort@gmail.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7902778,
                    44.8138889
                ]
            },
            "FacilityLongitude": -121.7902778,
            "FacilityLatitude": 44.8138889,
            "Keywords": "Olallie Lake Cabin,Olallie Forest Service Cabin",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "2333051000",
                    "FacilityID": "233305",
                    "FacilityAddressType": "Physical",
                    "FacilityStreetAddress1": "FSR 4220 Mt Hood National Forest",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Mt Hood",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "",
                    "LastUpdatedDate": "2021-05-19"
                },
                {
                    "FacilityAddressID": "20438648",
                    "FacilityID": "233305",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "595 NW Industrial Way",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Estacada",
                    "PostalCode": "97023",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 100017,
                    "FacilityID": "233305",
                    "ActivityName": "BIRDING",
                    "FacilityActivityDescription": "Birding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "233305",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "233305",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "233305",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100008,
                    "FacilityID": "233305",
                    "ActivityName": "CANOEING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "233305",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100036,
                    "FacilityID": "233305",
                    "ActivityName": "BACKPACKING",
                    "FacilityActivityDescription": "Backpacking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100009,
                    "FacilityID": "233305",
                    "ActivityName": "BERRY PICKING",
                    "FacilityActivityDescription": "Berry Picking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "233305",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "5f3def9f24ab3407939e7870f5471eee",
                    "LinkType": "Other",
                    "EntityID": "233305",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "62203d68a328a87a2b68fd5aa2b3a011",
                    "LinkType": "Other",
                    "EntityID": "233305",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "5228175220ee327b69587cdef63addc6",
                    "LinkType": "Other",
                    "EntityID": "233305",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/72315_OLRG.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2575817",
                    "MediaType": "Image",
                    "EntityID": "233305",
                    "EntityType": "Facility",
                    "Title": "OLALLIE LAKE GUARD STATION CABIN",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/68973.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2575832",
                    "MediaType": "Image",
                    "EntityID": "233305",
                    "EntityType": "Facility",
                    "Title": "OLALLIE LAKE GUARD STATION CABIN",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/68989.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "10050854",
            "LegacyFacilityID": "",
            "OrgFacilityID": "71122",
            "ParentOrgID": "131",
            "ParentRecAreaID": "",
            "FacilityName": "AAA'A campground group",
            "FacilityDescription": "<p>This is a t<em>errible pla</em>ce<strong> to camp in the winte</strong>r! Yes it is</p>",
            "FacilityTypeDescription": "Facility",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "<p>First left off route 100 </p>",
            "FacilityPhone": "",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.046381,
                    45.05142
                ]
            },
            "FacilityLongitude": -122.046381,
            "FacilityLatitude": 45.05142,
            "Keywords": "",
            "StayLimit": "",
            "Reservable": false,
            "Enabled": true,
            "LastUpdatedDate": "2020-09-10",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [],
            "FACILITYADDRESS": [],
            "ACTIVITY": [
                {
                    "ActivityID": 107,
                    "FacilityID": "10050854",
                    "ActivityName": "DIVING",
                    "FacilityActivityDescription": "<p>Do this at your own risk!</p>\r",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "10050854",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "10050854",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "<p>Description for activity</p>\r\r<p>testing 12/11/18</p>\r",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "10050854",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "<p>\r\tTesting</p>\r",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "10050854",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "<p>\r\tthis is an activity added by Niloo</p>\r",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 18,
                    "FacilityID": "10050854",
                    "ActivityName": "OFF HIGHWAY VEHICLE",
                    "FacilityActivityDescription": "<p>djsldfjsl</p>\r",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "10050856",
                    "LinkType": "Official Web Site",
                    "EntityID": "10050854",
                    "EntityType": "Facility",
                    "Title": "AAA'A campground group",
                    "Description": "",
                    "URL": "https://www.fs.usda.gov/recarea/test/recarea/?recid=71122"
                }
            ],
            "MEDIA": []
        },
        {
            "FacilityID": "272096",
            "LegacyFacilityID": "152793",
            "OrgFacilityID": "AN452793",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "NOTTINGHAM CAMPGROUND",
            "FacilityDescription": "<h2>Overview</h2>\nNottingham Campground is a local secret, hidden right off highway 35, centrally located with easy access to Mt. Hood and Hood River. The Hood River runs next to the campground, with most of the sites having direct access to the river. Natural landscapes are etched into this campground, making it one of the most unique, enjoyable, quiet campgrounds there is.<h2>Recreation</h2>\nThis campground is centrally located, with easy access to the highway that travels to Mt. Hood and back to Hood River. In this upper Hood River Valley area, there are many resources for hiking, biking, fishing and exploring. Whether you set up camp and explore the areas surrounding the campground, or drive somewhere, the recreational access is limitless.<h2>Facilities</h2>\nThere are no water, electricity or sewer hookups. Pit toilets are available for guests. Trash receptacles are placed all around the facility, making it easy to keep clean. A camp host is available during peak season to answer questions.<h2>Natural Features</h2>\nWith the Upper Hood River running next to the campground, the nearby traffic is drowned out, and a peaceful retreat is found. Several of the campsites are right on the river, and the beautiful areas that the river has etched is fun to explore.\n<h2>Nearby Attractions</h2>\nThis campground is centrally located, with easy access to the highway that travels to Mt. Hood and back to Hood River. Also, just next to the campground, is the trail head to Tamanawas Falls -- a great hike, easily enjoyed by people of all skills and ages.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Portland, take I84 to Hood River. Take exit 64 to highway 35. Follow for approximately 20 miles to campground.",
            "FacilityPhone": "",
            "FacilityEmail": "info@lostlakeresort.org",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.5677,
                    45.3671
                ]
            },
            "FacilityLongitude": -121.5677,
            "FacilityLatitude": 45.3671,
            "Keywords": "NOTTINGHAM CAMPGROUND",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20440483",
                    "FacilityID": "272096",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "PO Box 90",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Hood River",
                    "PostalCode": "97031",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 24,
                    "FacilityID": "272096",
                    "ActivityName": "VISITOR CENTER",
                    "FacilityActivityDescription": "Emergency Services",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "272096",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "272096",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "54972eba42f1274de5244a96d941b4b3",
                    "LinkType": "Other",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "2fb27a8845d6320d38755ce90969f7ed",
                    "LinkType": "Other",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2583084",
                    "MediaType": "Image",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "NOTTINGHAM CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84050.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "1ad9174d-7c15-40a6-a9e1-41bd7efd4c6e",
                    "MediaType": "Image",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "Nottinham",
                    "Subtitle": "",
                    "Description": "Nottingham",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/04/17/17/33/272096_9df66d3b-d456-464c-890e-8927da34e630_1440.jpg",
                    "Credits": "Lost Lake Resort & Campground",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2583087",
                    "MediaType": "Image",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "NOTTINGHAM CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84053.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583089",
                    "MediaType": "Image",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "NOTTINGHAM CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84055.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583086",
                    "MediaType": "Image",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "NOTTINGHAM CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84052.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583088",
                    "MediaType": "Image",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "NOTTINGHAM CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84054.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "267c371a-faf3-4618-8fc0-7f36f5b6e56f",
                    "MediaType": "Image",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "Nottingham",
                    "Subtitle": "",
                    "Description": "Nottingham",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/04/17/17/34/272096_8c928562-5642-41f1-add2-1a7c20074b2b_700.jpg",
                    "Credits": "Lost Lake Resort & Campground",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2583085",
                    "MediaType": "Image",
                    "EntityID": "272096",
                    "EntityType": "Facility",
                    "Title": "NOTTINGHAM CAMPGROUND",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84051.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232851",
            "LegacyFacilityID": "71636",
            "OrgFacilityID": "AN371636",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "INDIAN HENRY",
            "FacilityDescription": "<h2>Overview</h2>\nIndian Henry Campground is located in the Mount Hood National Forest, along the scenic Clackamas River. The campground is a great location for relaxation and a spectacular outdoor experience, providing ample access to the river and the surrounding wilderness, as well as other scenic spots in the area.<h2>Recreation</h2>\nThe family-friendly Clackamas River Trail is popular for hiking and mountain biking and begins at the upper end of the campground. It extends about 8 miles and climbs about 450 feet in elevation along the way. It is available year-round, but may be covered in snow during winter months. The Indian Henry Trail, which trolls through the forest, is also located near the campground.\n<br /> <br />\nFishing is very popular in the nearby river and anglers can expect a catch of winter steelhead, spring chinook and late summer kokanee salmon, as well as other species of freshwater fish. Whitewater rafting is also enjoyed by visitors to the area. The Clackamas River provides miles of wild water as it bends through the scenic Cascade range.<h2>Facilities</h2>\nThe large campground offers dozens of single-family campsites for tent and RV camping. Tent-only sites are available for reservation, while the rest of the sites are available on a first-come, first-served basis.\n<br /> <br />\nEach site is equipped with tables and campfire rings with grills. A dump station is located within the campground. Parking surfaces are mostly paved. Accessible flush toilets and drinking water are also provided.<h2>Natural Features</h2>\nThe campground is situated at an elevation of 1,249 feet, in Oregon's Cascade Mountains, nestled in a mixed forest of conifers and hardwoods, including grand old Douglas firs and a variety of evergreens. A thick gathering of ferns and ivy increase privacy between campsites. Some sites overlook the river and others neighbor a mountain creek.\n<h2>Nearby Attractions</h2>\nThe picturesque, blue-green Surprise Lake is located not far from the campground, up a steep climb. It is most popular for fishing, as the lake isn't large enough for motorized boats.\n<br /> <br />\nThe Bagby Hot Springs are located about 20 miles southwest of the campground. A popular site for soaking and relaxation, the springs are in a heavily wooded forest in the scenic Cascade Mountains of Oregon. A historic guard station was built there in 1913 and the available bathhouses are fed by three major hot water springs and several minor outlets in the area.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, Oregon, travel east on Highway 224 for 24 miles to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.0738889,
                    45.1080556
                ]
            },
            "FacilityLongitude": -122.0738889,
            "FacilityLatitude": 45.1080556,
            "Keywords": "INDH,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438199",
                    "FacilityID": "232851",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 32,
                    "FacilityID": "232851",
                    "ActivityName": "DAY USE AREA",
                    "FacilityActivityDescription": "Amphitheater",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232851",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232851",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232851",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232851",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "374613ce892654d416e6d5e8a11d9e9f",
                    "LinkType": "Other",
                    "EntityID": "232851",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "4a844b80de02aec9b09a2e5d1c549e22",
                    "LinkType": "Other",
                    "EntityID": "232851",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "349840f0063e688aae3d8cf7a99e8d20",
                    "LinkType": "Other",
                    "EntityID": "232851",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "91aee3062329c8206828d241e70042f7",
                    "LinkType": "Other",
                    "EntityID": "232851",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71636_INDH.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573757",
                    "MediaType": "Image",
                    "EntityID": "232851",
                    "EntityType": "Facility",
                    "Title": "INDIAN HENRY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67044.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573612",
                    "MediaType": "Image",
                    "EntityID": "232851",
                    "EntityType": "Facility",
                    "Title": "INDIAN HENRY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66883.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573718",
                    "MediaType": "Image",
                    "EntityID": "232851",
                    "EntityType": "Facility",
                    "Title": "INDIAN HENRY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66998.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573763",
                    "MediaType": "Image",
                    "EntityID": "232851",
                    "EntityType": "Facility",
                    "Title": "INDIAN HENRY",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67052.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232848",
            "LegacyFacilityID": "71632",
            "OrgFacilityID": "AN371632",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "FROG LAKE",
            "FacilityDescription": "<h2>Overview</h2>\n<p>Frog Lake Campground is a beautiful and somewhat rustic campground on Frog Lake. It provides access to enjoyable outdoor activities, including fishing and leisurely canoeing on the calm, mountain lake.</p>\n<h2>Recreation</h2>\nFrog Lake covers 10 acres and is open to fishing, swimming, canoeing and non-motorized boating. Anglers can expect a catch of rainbow trout. Picnicking is available at the campground's day use area, which provides access to the boat ramp.\n<br/><br/>\nA hiking trail leads east, up Frog Lake Buttes, as does an unimproved forest road, which is open to mountain biking and high-clearance off-road vehicles. The Pacific Crest National Scenic Trail passes just north of the campground, off Forest Road 2610.<h2>Facilities</h2>\nThe campground offers nearly three dozen single-family sites for tent and RV camping, though RVs over 22 feet are not recommended. Utility hookups are not available. Parking surfaces are gravel and dirt and may be irregular in shape. \n<br/><br/>\nEach site is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided throughout the campground. Firewood is available for purchase from the campground host.<h2>Natural Features</h2>\nThe campground is located between the highway and Frog Lake at an elevation of 3,800 feet, just past the town of Government Camp in Mt. Hood National Forest. The small campground is situated in a heavily forested area, where the sounds of frogs are heard at night.\n<h2>Nearby Attractions</h2>\nThe Sno-Park at Frog Lake is about 12 miles east of Government Camp. It provides trail access to Twin Lakes and Frog Lake Butte. The latter trail is closed to snowmobiles during February.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Sandy, travel 62 miles east on Highway 26, then continue 1 mile west through the Sno-Park on Forest Road 2610.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.6922222,
                    45.2225
                ]
            },
            "FacilityLongitude": -121.6922222,
            "FacilityLatitude": 45.2225,
            "Keywords": "FROG,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438196",
                    "FacilityID": "232848",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232848",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232848",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232848",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232848",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 34,
                    "FacilityID": "232848",
                    "ActivityName": "SWIMMING SITE",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232848",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232848",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "0241824b7777d1f0fcc3ddd765c42fc3",
                    "LinkType": "Other",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "38471786ddc55ef324be3b405d84c362",
                    "LinkType": "Other",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "bab97cee9071325d22279ded5c311814",
                    "LinkType": "Other",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "d685e358279655afdd640e5a6bda5952",
                    "LinkType": "Other",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71632_FROG.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573626",
                    "MediaType": "Image",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "FROG LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66897.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573649",
                    "MediaType": "Image",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "FROG LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66922.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573770",
                    "MediaType": "Image",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "FROG LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67060.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573653",
                    "MediaType": "Image",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "FROG LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66926.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573620",
                    "MediaType": "Image",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "FROG LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66891.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573690",
                    "MediaType": "Image",
                    "EntityID": "232848",
                    "EntityType": "Facility",
                    "Title": "FROG LAKE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66966.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "234075",
            "LegacyFacilityID": "74082",
            "OrgFacilityID": "AN374082",
            "ParentOrgID": "126",
            "ParentRecAreaID": "16835",
            "FacilityName": "WILDWOOD RECREATION SITE",
            "FacilityDescription": "<h2>Overview</h2>\n<p><strong>The next 2 days, Wednesday-Thursday, April 14-15, 2021, will involve closures in various areas of the park due to associated safety concerns with the removal of hazard tree removal. Observe posted closures. Thank you, Management.</strong></p>\n\n<p>Motorized access to <strong>Wildwood is OPEN</strong>, however, temporary closures are possible due to extreme weather conditions (ice, snow, wind, etc.) or damage caused by weather events. <strong>If in doubt please contact the Northwest Oregon District Office for the latest information prior to your planned visit (503-375-5646).</strong> At this time, park passes are available for purchase online for printing (<a href=\"https://www.recreation.gov/activitypass/76480a65-dd8d-11ea-9a16-669b13170d67\" rel=\"nofollow\"><strong>Wildwood Recreation Site Day Pass</strong></a>) or onsite at the automated fee machine (AFM), located next to the park’s entrance station. <strong>Credit cards only</strong>; no cash or checks. Visitors may purchase either a daily or an annual pass at the AFM. Visitors with an annual pass receipt should bring it to the park office for transfer to a static cling Annual Wildwood Pass. Wildwood staff is limited so please be patient and hold onto your paper receipt until able to contact a park employee. Wildwood is open from 8 AM until 1/2 hour before sunset 7 days a week. Please stay aware of the closure times posted on roadside signs throughout the park. The gate will close at the posted time so make sure that you exit the park at or before the closing time.  </p>\n<p>Wildwood Recreation Site is located along the Mount Hood Scenic Byway near the town of Welches, Oregon. Mount Hood, Oregon's tallest mountain, beckons travelers through a forested corridor to wade the waters of the Wild and Scenic Salmon River. <br><br>This <strong>year round day-use area</strong> is home to a wide range of recreation facilities and the Cascade Streamwatch Trail. Visitors have a chance to explore natural stream and wetland ecosystems along accessible interpretive trails and boardwalks and observe native fish in a unique, underwater fish viewing chamber.</p>\n<h2>Recreation</h2>\nHiking and wandering the boardwalks at Wildwood is the best way to experience the park. <br><br>\nThe Cascade Streamwatch Trail is an accessible, 3/4-mile paved loop that features quality educational displays, picturesque views of the Salmon River and a fish viewing window below stream level.<br><br>\nThe Wetlands Trail is an accessible, 3/4-mile loop trail leading to the challenging Boulder Ridge Trail, which is a 4.7-mile hike up the steep slopes of Huckleberry Mountain into the Salmon-Huckleberry Wilderness. <br><br>\nVisitors also enjoy swimming and fishing in the cool, clear waters of the Salmon River. <h2>Facilities</h2>\nWildwood is an excellent place for large groups, company picnics or special events. The site offers family picnic units, several group shelters, outdoor picnic kitchens, athletic fields, volleyball and basketball courts and fully accessible trails. <br><br>\nPicnic tables, fire rings and grills are available at each site. Flush toilets and drinking water are also provided. <h2>Natural Features</h2>\nNestled in a bend of the spectacular Wild and Scenic Salmon River, Wildwood Recreation Site encompasses 550 acres of beautiful land forested with old-growth Douglas fir, western hemlock, and western red cedar. Dense vegetation provides nice privacy between sites.\n<h2>Nearby Attractions</h2>\nMount Hood National Forest offers many recreational activities, including hiking, horseback riding, fishing, camping, backpacking, and skiing, among others.\n\nSandy Ridge Mountain Bike Trails.\n<h2>contact_info</h2>\nFor facility specific information, please call (503) 622-3696.<h2>Charges &amp; Cancellations</h2>\n<p>Standard fees apply and are non-refundable.</p>\n<p>Visit <a href=\"https://www.recreation.gov/rules-reservation-policies\" rel=\"nofollow\">https://www.recreation.gov/rules-reservation-policies</a> for more information.</p>\n",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "<ul>\n<li>A daily vehicle fee is not included with shelter reservations. Fees vary from $5 (under 9 people), $10 van (over 10 people) and $20 bus (over 20 people). An electronic fee machine is onsite to accept credit card payments. or you can purchase before you leave your house at <a href=\"https://www.recreation.gov/activitypass/76480a65-dd8d-11ea-9a16-669b13170d67\" rel=\"nofollow\">Wildwood Recreation Site Day Pass</a>.</li>\n<li>Alternatively, you may use the Wildwood Annual Pass, Interagency Passes, and Golden Passes in place of the daily vehicle fee. Display those passes on the dash or hang from the rearview mirror.</li>\n</ul>\n",
            "FacilityDirections": "Wildwood Recreation Site is located 39 miles east of Portland on Highway 26 near Welches, Oregon.\n",
            "FacilityPhone": "503-622-3696",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.9866667,
                    45.3561111
                ]
            },
            "FacilityLongitude": -121.9866667,
            "FacilityLatitude": 45.3561111,
            "Keywords": "WIWO,Wildwood Recreation Site,Wild Wood Recreation Site,Wildwood Rec Site,Wild Wood Rec Site,Wildwood Recreation Area,Wild Wood Recreation Area,Wildwood Rec Area,Wild Wood Rec Area,Wild,Wood,Molalla River Corridor.",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "126",
                    "OrgName": "Bureau of Land Management",
                    "OrgImageURL": "blm.gif",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.blm.gov",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "BLM",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "139",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "16835",
                    "RecAreaName": "Salmon Wild and Scenic River",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/16835"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "2340751000",
                    "FacilityID": "234075",
                    "FacilityAddressType": "Physical",
                    "FacilityStreetAddress1": "Wildwood Recreation Site",
                    "FacilityStreetAddress2": "65670 E HWY. 26",
                    "FacilityStreetAddress3": "",
                    "City": "Welches",
                    "PostalCode": "97067",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "",
                    "LastUpdatedDate": "2021-05-19"
                },
                {
                    "FacilityAddressID": "20439418",
                    "FacilityID": "234075",
                    "FacilityAddressType": "Mailing",
                    "FacilityStreetAddress1": "Wildwood Recreation Site",
                    "FacilityStreetAddress2": "PO BOX 229",
                    "FacilityStreetAddress3": "",
                    "City": "WELCHES",
                    "PostalCode": "97067",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "234075",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "234075",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "234075",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "234075",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic & Cultural Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "234075",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100036,
                    "FacilityID": "234075",
                    "ActivityName": "BACKPACKING",
                    "FacilityActivityDescription": "Backpacking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 31,
                    "FacilityID": "234075",
                    "ActivityName": "FISH VIEWING SITE",
                    "FacilityActivityDescription": "Fish Viewing Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 20,
                    "FacilityID": "234075",
                    "ActivityName": "PICNICKING",
                    "FacilityActivityDescription": "Picnicking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 104,
                    "FacilityID": "234075",
                    "ActivityName": "PHOTOGRAPHY",
                    "FacilityActivityDescription": "Photography",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100019,
                    "FacilityID": "234075",
                    "ActivityName": "WATER ACCESS",
                    "FacilityActivityDescription": "Water Access",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100009,
                    "FacilityID": "234075",
                    "ActivityName": "BERRY PICKING",
                    "FacilityActivityDescription": "Berry Picking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100017,
                    "FacilityID": "234075",
                    "ActivityName": "BIRDING",
                    "FacilityActivityDescription": "Birding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 32,
                    "FacilityID": "234075",
                    "ActivityName": "DAY USE AREA",
                    "FacilityActivityDescription": "Day Use Area",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 103,
                    "FacilityID": "234075",
                    "ActivityName": "ENVIRONMENTAL EDUCATION",
                    "FacilityActivityDescription": "Environmental Education",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100002,
                    "FacilityID": "234075",
                    "ActivityName": "MOUNTAIN BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "03e4c55e16835bfd7561969281d925f6",
                    "LinkType": "Other",
                    "EntityID": "234075",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "f0720bbbcd07e24fa27c416a07110326",
                    "LinkType": "Other",
                    "EntityID": "234075",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2578625",
                    "MediaType": "Image",
                    "EntityID": "234075",
                    "EntityType": "Facility",
                    "Title": "WILDWOOD RECREATION SITE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/71731.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2578570",
                    "MediaType": "Image",
                    "EntityID": "234075",
                    "EntityType": "Facility",
                    "Title": "WILDWOOD RECREATION SITE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/71618.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2578619",
                    "MediaType": "Image",
                    "EntityID": "234075",
                    "EntityType": "Facility",
                    "Title": "WILDWOOD RECREATION SITE",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/71719.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232846",
            "LegacyFacilityID": "71629",
            "OrgFacilityID": "AN371629",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "SUNSTRIP",
            "FacilityDescription": "<h2>Overview</h2>\nSunstrip Campground is a primitive campground on the banks of the Clackamas Wild and Scenic River. It provides access to a variety of outdoor activities, but retains the look and feel of true nature, with only a few amenities.<h2>Recreation</h2>\nFishing is very popular in the Clackamas and anglers can expect winter Steelhead, spring Chinook and late summer Kokanee salmon, as well as other species of freshwater fish.<br />\n<br />\nWhitewater rafting is also a favorite activity among visitors. The Clackamas River provides miles of wild water as it snakes through the scenic Cascade range.\n<br /><br />\nA hiking trail meanders along the riverbank, north and south of the campground. Scenic driving is available on the nearby West Cascades National Scenic Byway, which follows the river.<h2>Facilities</h2>\nThe campground offers about eight tent-only campsites, half of which are on the waterfront. Each site is equipped with a table and campfire ring with grill. Accessible vault toilets are provided. Drinking water is not available at the campground.<h2>Natural Features</h2>\nThe campground is nestled in a wooded area of the Mt. Hood National Forest, thick with moss and greenery, at an elevation of about 1,000 feet.<br />\n<br />\nThe river provides habitat for the federally protected bald eagle and northern spotted owl, as well as the occasional peregrine falcon. A variety of wildlife make its home in the area.\n<h2>Nearby Attractions</h2>\nThe Clackamas River, just below nearby Indian Henry Campground to the North Fork Reservoir, provides 12.5 miles of class III-IV whitewater. Outfitters are located in the town of Estacada.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, travel east on Highway 224 for about 21 miles to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.1095278,
                    45.1526222
                ]
            },
            "FacilityLongitude": -122.1095278,
            "FacilityLatitude": 45.1526222,
            "Keywords": "SUN1,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438194",
                    "FacilityID": "232846",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 14,
                    "FacilityID": "232846",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232846",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232846",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "232846",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232846",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "c4771d191ee8ee980102328f9d2e51fb",
                    "LinkType": "Other",
                    "EntityID": "232846",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "969fd29a39eaa83b2b8e7c19f391c483",
                    "LinkType": "Other",
                    "EntityID": "232846",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "0faa2db18a3c9aa8cab2f3624f7595da",
                    "LinkType": "Other",
                    "EntityID": "232846",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "ca5d8d9f1866ecac6ff9ac1ffe9bad74",
                    "LinkType": "Other",
                    "EntityID": "232846",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71629_SUN1.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573624",
                    "MediaType": "Image",
                    "EntityID": "232846",
                    "EntityType": "Facility",
                    "Title": "SUNSTRIP",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66895.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573753",
                    "MediaType": "Image",
                    "EntityID": "232846",
                    "EntityType": "Facility",
                    "Title": "SUNSTRIP",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67039.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573698",
                    "MediaType": "Image",
                    "EntityID": "232846",
                    "EntityType": "Facility",
                    "Title": "SUNSTRIP",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66975.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573637",
                    "MediaType": "Image",
                    "EntityID": "232846",
                    "EntityType": "Facility",
                    "Title": "SUNSTRIP",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66909.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573648",
                    "MediaType": "Image",
                    "EntityID": "232846",
                    "EntityType": "Facility",
                    "Title": "SUNSTRIP",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66921.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232868",
            "LegacyFacilityID": "71654",
            "OrgFacilityID": "AN371654",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "OAK FORK ",
            "FacilityDescription": "<h2>Overview</h2>\nOak Fork Campground is located on the shores of Timothy Lake in the shadow of Oregon's Mt. Hood. The surrounding forest setting offers spectacular views, miles of trails for exploration and abundant fishing.<h2>Recreation</h2>\nProximity to Timothy Lake allows campers to enjoy a variety of water-related recreation activities, including boating and sailing, as well as swimming, windsurfing and fishing. Anglers can expect a catch of kokanee salmon and a variety of trout .\n   \nA range of trails are located in the area. The Timothy Lake Trail is popular for hiking, mountain biking and horseback riding. The 12 miles of relatively level terrain loops trekkers around the lake, providing scenic views of the area. It connects to the Pacific Crest National Scenic Trail, a lengthy hike that extends across three states, from the borders of Canada and Mexico. Portions of that trail also lead southwest to Clackamas Lake Campground.\n   \nThe Clackamas Lake Ranger Station Historic District is less than 2 miles from the campground. It was built to house forest service workers in the early 1900s. The rustic architecture and historic nature of the buildings and the surrounding area draws thousands of tourists each year.<h2>Facilities</h2>\n<p>The campground offers 36 single-family campsites, six cabins, and eight hike-in sites with some of these as accessible sites. Each site is equipped with a picnic table and fire grill. Accessible vault toilets and drinking water are provided. An on-site host is available for questions regarding the campground and surrounding area.<br><br>Sleeping cabins are furnished with a twin over twin bunk, a twin over full bunk, a table and two chairs. The beds have mattresses, but please bring your own bedding. Cooking and smoking in cabins is prohibited and pets are not allowed in the cabins or at the cabin sites. Cabins are nonelectric. </p>\n<p>The nearest gas station/convenience store is about 18 miles away, west on Hwy. 26. The nearest grocery store is in Government Camp, about 23 miles away, west on Hwy. 26.</p>\n<h2>Natural Features</h2>\nThe campground is situated on the southeastern shore of the roughly 1,400-acre lake, at an elevation of 3,400 feet. Timothy Lake was created in 1956 as a storage reservoir for the Oak Grove Hydroelectric Project. It is one of the larger lakes in the Mt. Hood National Forest.\n<h2>Nearby Attractions</h2>\nOak Fork is about 27 miles from the base of majestic Mt. Hood, the highest point in Oregon. The historic Timberline Lodge in Government Camp offers scenic views of the snow-capped mountain.<h2>Charges &amp; Cancellations</h2>\n<p>A service fee will apply if you change or cancel your reservation. Late cancellations are subject to additional fees. For full details see  the Recreation.Gov, Rules & Reservation Policies.</p>\n",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "Payment in-full will be charged to your credit card upon completion of the reservation. A non-refundable online reservation fee may be charged for some facilities. ",
            "FacilityDirections": "From Sandy, Oregon, travel east on Highway 26 for approximately 40 miles to Skyline Road/Road 42. Turn right on Skyline Road and continue south for about 9 miles. Turn right on Forest Service Road 57,and then turn right again at the Oak Fork Campground entrance sign.",
            "FacilityPhone": "503-464-8515",
            "FacilityEmail": "timothylake@pgn.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7705556,
                    45.1152778
                ]
            },
            "FacilityLongitude": -121.7705556,
            "FacilityLatitude": 45.1152778,
            "Keywords": "OAK3,MT. HOOD NF - FS,Timothy Lake",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438216",
                    "FacilityID": "232868",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "OAK FORK CAMPGROUND",
                    "FacilityStreetAddress2": "SKYLINE ROAD",
                    "FacilityStreetAddress3": "",
                    "City": "TIMOTHY LAKE",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 100008,
                    "FacilityID": "232868",
                    "ActivityName": "CANOEING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100060,
                    "FacilityID": "232868",
                    "ActivityName": "CRAWFISHING",
                    "FacilityActivityDescription": "Crawfishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100002,
                    "FacilityID": "232868",
                    "ActivityName": "MOUNTAIN BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100007,
                    "FacilityID": "232868",
                    "ActivityName": "KAYAKING",
                    "FacilityActivityDescription": "Kayaking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100018,
                    "FacilityID": "232868",
                    "ActivityName": "NON-MOTORIZED BOATING",
                    "FacilityActivityDescription": "Non-Motorized Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 105,
                    "FacilityID": "232868",
                    "ActivityName": "PADDLING",
                    "FacilityActivityDescription": "Paddling",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 20,
                    "FacilityID": "232868",
                    "ActivityName": "PICNICKING",
                    "FacilityActivityDescription": "Picnicking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 104,
                    "FacilityID": "232868",
                    "ActivityName": "PHOTOGRAPHY",
                    "FacilityActivityDescription": "Photography",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100037,
                    "FacilityID": "232868",
                    "ActivityName": "SAILING",
                    "FacilityActivityDescription": "Sailing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100015,
                    "FacilityID": "232868",
                    "ActivityName": "STAR GAZING",
                    "FacilityActivityDescription": "Star Gazing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100006,
                    "FacilityID": "232868",
                    "ActivityName": "WATER ACTIVITIES",
                    "FacilityActivityDescription": "Water Activities",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232868",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 34,
                    "FacilityID": "232868",
                    "ActivityName": "SWIMMING SITE",
                    "FacilityActivityDescription": "Swimming Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 32,
                    "FacilityID": "232868",
                    "ActivityName": "DAY USE AREA",
                    "FacilityActivityDescription": "Day Use Area",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "232868",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 24,
                    "FacilityID": "232868",
                    "ActivityName": "VISITOR CENTER",
                    "FacilityActivityDescription": "Visitor Center",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 15,
                    "FacilityID": "232868",
                    "ActivityName": "HORSEBACK RIDING",
                    "FacilityActivityDescription": "Horseback Riding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232868",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 10,
                    "FacilityID": "232868",
                    "ActivityName": "INTERPRETIVE PROGRAMS",
                    "FacilityActivityDescription": "Interpretive Programs",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232868",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "232868",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic & Cultural Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232868",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232868",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100043,
                    "FacilityID": "232868",
                    "ActivityName": "AMPHITHEATER",
                    "FacilityActivityDescription": "Amphitheater",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100009,
                    "FacilityID": "232868",
                    "ActivityName": "BERRY PICKING",
                    "FacilityActivityDescription": "Berry Picking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100017,
                    "FacilityID": "232868",
                    "ActivityName": "BIRDING",
                    "FacilityActivityDescription": "Birding",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "76ebd8f44d2153769c12d7f20a3418e2",
                    "LinkType": "Other",
                    "EntityID": "232868",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "f95c2949baf691182e45cd4b5fccb961",
                    "LinkType": "Other",
                    "EntityID": "232868",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "58ec901039338d97ab20d70958f8c6db",
                    "LinkType": "Other",
                    "EntityID": "232868",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71654_OAK3.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573709",
                    "MediaType": "Image",
                    "EntityID": "232868",
                    "EntityType": "Facility",
                    "Title": "Boat on the shore of Oak Fork",
                    "Subtitle": "",
                    "Description": "Motor boats are limited to 10 mph",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66988.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "9dfb0d7b-03ae-4c53-8f4e-453c1e2e0a37",
                    "MediaType": "Image",
                    "EntityID": "232868",
                    "EntityType": "Facility",
                    "Title": "Panoramic photo of the lake and mountains beyond Timothy Lake",
                    "Subtitle": "",
                    "Description": "A quiet evening paddle is a great way to wind down",
                    "EmbedCode": "",
                    "Height": 446,
                    "Width": 1600,
                    "URL": "https://cdn.recreation.gov/public/2018/08/14/23/44/fb938d16-bd9f-48af-9e60-b7e200519954_1600.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2573655",
                    "MediaType": "Image",
                    "EntityID": "232868",
                    "EntityType": "Facility",
                    "Title": "Vault toilet at Oak Fork",
                    "Subtitle": "",
                    "Description": "All restrooms have been updated",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66928.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "3c76c5b1-610f-4dcd-ad9e-033ae4f19f6f",
                    "MediaType": "Image",
                    "EntityID": "232868",
                    "EntityType": "Facility",
                    "Title": "Looking out from Oak Fork at Timothy Lake",
                    "Subtitle": "",
                    "Description": "View of Timothy Lake from Oak Fork",
                    "EmbedCode": "",
                    "Height": 338,
                    "Width": 450,
                    "URL": "https://cdn.recreation.gov/public/2018/08/14/23/43/1248d3f4-1981-4e9c-aa11-7dccc97f722a_450.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ]
        },
        {
            "FacilityID": "272092",
            "LegacyFacilityID": "152794",
            "OrgFacilityID": "AN452794",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "Kinnikinnick (Laurance Lake) Campground",
            "FacilityDescription": "<h2>Overview</h2>\nKinnikinnick Campground is a hidden gem, situated north of Mt. Hood, just outside of Parkdale, Oregon. Sitting on Laurence Lake, Kinnikinnick Campground offers beautifully landscaped campsites with views of Laurence Lake and the wide-open hills that surround the lake.<h2>Recreation</h2>\nLaurence Lake allows all non-motorized water sports. There are no rental facilities on site.<h2>Facilities</h2>\nThe campground features well-groomed campsites, including campfire pits and picnic tables. The location offers vault toilets. There is a boat ramp nearby.<h2>Natural Features</h2>\nSurrounded by Laurence Lake, Kinnikinnick Campground is a natural attraction all its own. With incredible lake views, regular sightings of bald eagles and rock and hill formations that surround this site, it is the perfect place to go &quot;off the grid&quot; and enjoy the outdoors.\n<h2>Nearby Attractions</h2>\nLaurance Lake is great for waterplay and fishing. Kinnickinnick Campground is just a 30-minute drive to nearby ski resorts, where summer hiking and outdoor adventures await.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From I-84 in Hood River - South on highway 35 to Parkdale. Follow signs to Laurance Lake.",
            "FacilityPhone": "541-386-6366",
            "FacilityEmail": "info@lostlakeresort.org",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.6634306,
                    45.4574806
                ]
            },
            "FacilityLongitude": -121.6634306,
            "FacilityLatitude": 45.4574806,
            "Keywords": "Laurance Lake Campground",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20440484",
                    "FacilityID": "272092",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Parkdale",
                    "PostalCode": "97041",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 27,
                    "FacilityID": "272092",
                    "ActivityName": "FISH HATCHERY",
                    "FacilityActivityDescription": "Fish Hatchery",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "272092",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "272092",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "272092",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "1f45ae930bfd4da75fb20a57b26c0dfe",
                    "LinkType": "Other",
                    "EntityID": "272092",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "50bb7caa20a567aa4df0de12a3ee5d37",
                    "LinkType": "Other",
                    "EntityID": "272092",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "797786d5-df86-4c22-a2e2-609ac202d4af",
                    "MediaType": "Image",
                    "EntityID": "272092",
                    "EntityType": "Facility",
                    "Title": "Laurance Lake",
                    "Subtitle": "",
                    "Description": "Laurance Lake",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/04/17/15/19/272092_3048820f-11c6-4ddf-884c-5ee7559c24cf_1440.jpg",
                    "Credits": "Lost Lake Resort & Campground",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2583090",
                    "MediaType": "Image",
                    "EntityID": "272092",
                    "EntityType": "Facility",
                    "Title": "Kinnikinnick (Laurance Lake) Campground",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84056.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583095",
                    "MediaType": "Image",
                    "EntityID": "272092",
                    "EntityType": "Facility",
                    "Title": "Kinnikinnick (Laurance Lake) Campground",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84061.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583093",
                    "MediaType": "Image",
                    "EntityID": "272092",
                    "EntityType": "Facility",
                    "Title": "Kinnikinnick (Laurance Lake) Campground",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84059.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583094",
                    "MediaType": "Image",
                    "EntityID": "272092",
                    "EntityType": "Facility",
                    "Title": "Kinnikinnick (Laurance Lake) Campground",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84060.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583092",
                    "MediaType": "Image",
                    "EntityID": "272092",
                    "EntityType": "Facility",
                    "Title": "Kinnikinnick (Laurance Lake) Campground",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84058.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2583091",
                    "MediaType": "Image",
                    "EntityID": "272092",
                    "EntityType": "Facility",
                    "Title": "Kinnikinnick (Laurance Lake) Campground",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/84057.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232850",
            "LegacyFacilityID": "71634",
            "OrgFacilityID": "AN371634",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "RAAB",
            "FacilityDescription": "<h2>Overview</h2>\nRaab Group Campground is a new group campground for those that are looking for multiple campsites or have large families. It is located on the banks of the Collawash River, which flows into the mighty Clackamas River in the mountains of northern Oregon. <br /> <br />\nRecreational opportunities are not far from the campground, making it the perfect getaway spot. It can comfortably accommodate any outdoorsman, including the hiking enthusiast, the fly fisherman, bicyclist and whitewater rafter, among others who wish to enjoy nature.<h2>Recreation</h2>\nCatch and release fishing for trout is allowed on the main fork of the Collawash, but the streams are closed to fishing for salmon and steelhead. Whitewater rafting and kayaking are popular activities. At least one 5-mile stretch of the more than 17-mile river boasts class III-IV whitewater. <br /> <br />\nThe Collawash flows into the nearby Clackamas River, which also provides miles of wild water as it snakes through the scenic Cascade Range. Anglers enjoy fishing the Clackamas for steelhead, Kokanee and Chinook salmon. The river provides a perfect habitat for the federally protected bald eagle and northern spotted owl, as well as an occasional peregrine falcon. A variety of other wildlife makes its home in the area. <br /> <br />\nVisitors enjoy hiking in the Bull of the Woods Wilderness, which is south of the campground. Several primitive forest roads nearby are open to mountain biking. \n<br /> <br />\nWest Cascades Scenic Byway runs just outside the campground, meandering along the Wild and Scenic Clackamas River.<h2>Facilities</h2>\nThe campground offers six group campsites for tent and RV camping. Large RVs, however, might have a hard time negotiating tight turns within the campground .The sites are limited to no more than four RV&Atilde;&cent;&Acirc;?&Acirc;?s per RV group. Utility hookups are not available and parking surfaces are mostly gravel and mossy. <br /> <br />\nThe group sites can accommodate between 30 to 60 people. Picnic tables and campfire rings with grills are provided, as are accessible vault toilets. Drinking water is not available. Firewood &amp; water is available for purchase at the camp store.<h2>Natural Features</h2>\nThe campground is located southeast of the city of Estacada, on the Collawash River at an elevation of about 1,500 feet. It lies in a dense forest of old-growth Douglas fir trees and plentiful rhododendron bushes that provide privacy between campsites.\n<h2>Nearby Attractions</h2>\nBagby Hot Springs is located about 10 miles southwest of the campground. A popular site for soaking and relaxing, the springs are in a heavily wooded area in the scenic Cascade Range. A historic guard station was built there in 1913 and the available bathhouses are fed by three major hot springs and several minor outlets in the area.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "<b> From Estacada: </b> travel east on Highway 224/Road 46 for approximately 29 miles to Road 63. Turn right and travel about a mile to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.0694444,
                    45.0222222
                ]
            },
            "FacilityLongitude": -122.0694444,
            "FacilityLatitude": 45.0222222,
            "Keywords": "RAAB,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438198",
                    "FacilityID": "232850",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 14,
                    "FacilityID": "232850",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232850",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232850",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232850",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Kayaking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232850",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "232850",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232850",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "f2f51a8baa1e13da48dafa8529f2b182",
                    "LinkType": "Other",
                    "EntityID": "232850",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "7e51ada952f338484085456161d7c420",
                    "LinkType": "Other",
                    "EntityID": "232850",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "b71451de686170f344d48c7321e7d769",
                    "LinkType": "Other",
                    "EntityID": "232850",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "17302db75d01a2589047e8f846e04358",
                    "LinkType": "Other",
                    "EntityID": "232850",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71634_RAAB.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573678",
                    "MediaType": "Image",
                    "EntityID": "232850",
                    "EntityType": "Facility",
                    "Title": "RAAB",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66954.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573727",
                    "MediaType": "Image",
                    "EntityID": "232850",
                    "EntityType": "Facility",
                    "Title": "RAAB",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67008.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573647",
                    "MediaType": "Image",
                    "EntityID": "232850",
                    "EntityType": "Facility",
                    "Title": "RAAB",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66920.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573617",
                    "MediaType": "Image",
                    "EntityID": "232850",
                    "EntityType": "Facility",
                    "Title": "RAAB",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66888.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573609",
                    "MediaType": "Image",
                    "EntityID": "232850",
                    "EntityType": "Facility",
                    "Title": "RAAB",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66880.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "233323",
            "LegacyFacilityID": "72347",
            "OrgFacilityID": "AN372347",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "SPRING DRIVE RV CAMPGROUND",
            "FacilityDescription": "<h2>Overview</h2>\nSpring Drive RV Campground is a popular camping spot with access to a variety of recreational activities. It offers full hookups and spacious campsites, amid a forest of towering trees. <br />\n<br />The campground is an ideal destination for families that enjoy the great outdoors in the beautiful Pacific Northwest. It is not far from some great wilderness spots, including mountain lakes and streams, as well as trails and historic sites.<h2>Recreation</h2>\nA variety of short hiking trails are available nearby for exploration. The Mt. Hood area and Government Camp, as well as a variety of mountain lakes and streams, are within a short drive from the campground. Picnicking is also a popular activity.<h2>Facilities</h2>\nThe campground offers single-family RV campsites. Full utility hookups are available and parking surfaces are grass or paved. Sites are equipped with tables and campfire rings with grills. There are no toilet facilities or drinking water, other than what is provided via the hookups. The campground is for self-contained RVs only; tent camping is not allowed.<h2>Natural Features</h2>\nThe campground is located on the southeastern edge of Mt. Hood National Forest an at elevation of 3,200 feet. It is situated among towering pine and fir trees, but the beauty of the campground is its secluded feel, along with some luxuries of RV camping. Deer and other wildlife are common in the area.\n<h2>Nearby Attractions</h2>\nSpring Drive is near the Warm Springs Tribal Lands and is approximately 19 miles from Government Camp, where visitors may enjoy summertime snow skiing.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Sandy, travel east on Highway 26 for 48 miles to the Highway 26/I-216 junction. Turn left onto I-216 and travel east for 5 miles. Turn left on Spring Drive and continue to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.5325,
                    45.1252778
                ]
            },
            "FacilityLongitude": -121.5325,
            "FacilityLatitude": 45.1252778,
            "Keywords": "None",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438666",
                    "FacilityID": "233323",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "73713 Spring Drive",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Maupin",
                    "PostalCode": "97037",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 9,
                    "FacilityID": "233323",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "77ba6a653aae62dd4a11144b86e92040",
                    "LinkType": "Other",
                    "EntityID": "233323",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "7f743a0ee13a2b2d26620c6ad65177f7",
                    "LinkType": "Other",
                    "EntityID": "233323",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "b3385204cd478ab6bdf6e25b1b6ab428",
                    "LinkType": "Other",
                    "EntityID": "233323",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "6cf5426e1fba8d4a55f07781cd5820f5",
                    "LinkType": "Other",
                    "EntityID": "233323",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/72347_SDRC.pdf"
                }
            ],
            "MEDIA": []
        },
        {
            "FacilityID": "233329",
            "LegacyFacilityID": "72357",
            "OrgFacilityID": "AN372357",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "TILLY JANE GUARD STATION",
            "FacilityDescription": "<h2>Overview</h2>\nTilly Jane Guard Station is an ideal getaway for individuals and families who enjoy the great outdoors in the beautiful Pacific Northwest. It is one of the oldest structures on Mt. Hood and provides shelter for warmth and an escape from the elements while participating in a variety of activities, specifically winter-related recreation. During the winter months it serves as a winter retreat for visitors hardy enough to access the cabin from the Tilly Jane Sno-Park.<br/><br/>\n\nGuests can access the cabin following a 9-mile, gently sloping road, or via the historic Tilly Jane Ski Trail, which is roughly 2.7 miles with an elevation gain of 1,900 feet. Skis with skins or snowshoes are highly recommended and travelers should be prepared for extreme weather conditions. The TJ Ski Trail is poorly marked due to the 2008 Gnarl Ridge Fire so be on notice.  Guests should be experienced in backcountry travel and survival skills.  Guests must also bring several of their own amenities.<h2>Recreation</h2>\nVisitors to the Guard Station enjoy a variety of recreational activities, including hiking, snowshoeing and backcountry skiing, which can be done most of the year due to high levels of snowfall in the area. Many trails exist in the area, prompting exploration. Most trails are not marked so visitors should be familiar with the area.  \n\nAbove the tree line, visitors can catch a glimpse of Mt. Adams, St Helens, Mt. Rainier and the Hood River Valley flanked by the dry high desert of eastern Oregon.<h2>Facilities</h2>\nThe cabin accommodates up to 8 people.  It includes a full kitchen and a second story sleeping loft with pads.  It has propane lighting and a cooking stove/oven, as well as all cooking pots and utensils. A variety of seating is available, as well as a table and chairs. A fireplace and woodstove with firewood are also provided.   An on-site pit toilet is located within the wood room of the cabin.  Water is obtained by melting snow or by digging an access hole to Tilly Creek.  We recommend all water be treated.<br/><br/>\n\nGuests will need to bring their own bedding, clothing, food, garbage bags and toilet paper. A variety of house rules exist, including proper closure of the cabin, which involves shutting off the gas, reinstalling the shutters and locking the cabin up. The cabin will need to be cleaned prior to leaving, dishes washed and everything in its place. Guests will also need to replenish a supply of wood and kindling for the next group. All food and garbage must be removed from the cabin.<h2>Natural Features</h2>\nThe Guard Station is located high on the northeast side of Mt. Hood at an elevation of 5,700 feet. It was built in 1934 and initially received seasonal use for back country access and fire protection. The cabin is one of five structures in the area built in the 1930s by the Civilian Conservation Corps and is part of the Cloud Cap/Tilly Jane Historic District. The facility is operated and maintained by the volunteer organization, Oregon Nordic Club, under a permit from the U.S. Forest Service.<h2>Charges &amp; Cancellations</h2>\n<p>Standard Rec.gov change/cancellation policy's apply.</p>\n<p>Cancellations with less than 14 days notice will pay a $10 service fee AND forfeit the first night's reservation fee.</p>\n",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "<p>Reservation Fee: $6.00 (non-refundable)</p>\n<p>Recreation Fee:  $200.00 per night, two night minimum/maximum required</p>\n",
            "FacilityDirections": "From Hood River, Oregon, travel south on Highway 35 for 8.5 miles, past the Hood River Ranger Station. Look for the Cooper Spur Inn sign and turn right off Highway 35, just north of Olallie Trailhead, onto Forest Road 3510 and drive to Copper Spur Inn. Turn left at the Cloud Cap/Tilly Jane Road 3512. The first trailhead is just past the intersection with Forest Service Road 620, with parking on the right and the trail on the left side of the road. The second option is to follow the Cloud Cap Road (FS Road 3512). This is the 9 mile gently sloping road.<br /><br />  \n\nThe safest way to ski down is the Cloud Cap Road (FS Road 3512). This can be a long (9 mile), extremely difficult slog if there is soft snow. The Old Wagon Road shortens this distance by about 4 to 5 miles, but involves steep slopes in the upper section of the road. The shortest route and probably the safest in poor snow conditions is to ski or walk down the Tilly Jane Ski Trail, a distance of 2.7 miles.",
            "FacilityPhone": "RESERVATIONS@TILLYJANECABINS.ORG",
            "FacilityEmail": "tillyjanecabin@gmail.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.6480556,
                    45.3988889
                ]
            },
            "FacilityLongitude": -121.6480556,
            "FacilityLatitude": 45.3988889,
            "Keywords": "Guard Station,Cloud Cap Guard Station",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438672",
                    "FacilityID": "233329",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "C/O HOOD RIVER RANGER STATION ",
                    "FacilityStreetAddress2": "6780 HWY 35",
                    "FacilityStreetAddress3": "",
                    "City": "Parkdale ",
                    "PostalCode": "97041",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 22,
                    "FacilityID": "233329",
                    "ActivityName": "WINTER SPORTS",
                    "FacilityActivityDescription": "Winter Sports",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "233329",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "233329",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "233329",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic & Cultural Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100035,
                    "FacilityID": "233329",
                    "ActivityName": "ICE CLIMBING",
                    "FacilityActivityDescription": "Ice Climbing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100040,
                    "FacilityID": "233329",
                    "ActivityName": "MOUNTAIN CLIMBING",
                    "FacilityActivityDescription": "Mountain Climbing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100055,
                    "FacilityID": "233329",
                    "ActivityName": "SKIING",
                    "FacilityActivityDescription": "Skiing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100053,
                    "FacilityID": "233329",
                    "ActivityName": "SLEDDING",
                    "FacilityActivityDescription": "Sledding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 28,
                    "FacilityID": "233329",
                    "ActivityName": "WILDERNESS",
                    "FacilityActivityDescription": "Wilderness",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "d6c2dc8d955132d8ef7fbdfab45f4f77",
                    "LinkType": "Other",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Oregon Nordic Club",
                    "URL": "http://onc.org/CGC-ONC"
                },
                {
                    "EntityLinkID": "6e7f9fdc7a5ec27f83b9d5dbcc4a3f5b",
                    "LinkType": "Other",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "5df3614c1e855b953e4a3b04394e04c0",
                    "LinkType": "Other",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "ff5b1974-5788-4298-b329-fa5c94881511",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane Guard Station",
                    "Subtitle": "",
                    "Description": "Winter rentals only",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/16/52/233329_9d6abec3-1c66-4c81-8d92-d19aa5ea0a06_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "86db2e7d-c529-428e-9217-90505c532261",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Main Fireplace",
                    "Subtitle": "",
                    "Description": "Wood burning stone fireplace",
                    "EmbedCode": "",
                    "Height": 934,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/17/35/233329_e9556a12-8ff1-4da8-8b75-5b621f7eb659_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "410d1205-c55c-4b7e-8b84-f4a22565815e",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Guard Station Garage",
                    "Subtitle": "",
                    "Description": "Storage Garage is visible, but not open to the public",
                    "EmbedCode": "",
                    "Height": 700,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/17/32/233329_8ec41e84-b288-42b5-a3b3-b1601da44289_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "5645476f-4a1e-4305-a267-799aae500b8a",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Guard Station Kitchen",
                    "Subtitle": "",
                    "Description": "Kitchen with propane stove, oven and wood burning stove",
                    "EmbedCode": "",
                    "Height": 934,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/17/34/233329_48c490c7-c9d9-4d3a-a098-a2c406076596_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "ea44902f-4bcc-4fb7-88d8-74a76e4e8932",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Winter Entrance",
                    "Subtitle": "",
                    "Description": "Guard station winter access door",
                    "EmbedCode": "",
                    "Height": 700,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/17/27/233329_435f2c99-38a3-4a58-a95e-79c2112e42f8_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "cfc6dfde-0891-4f5f-989a-72b3693e2ace",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane Guard Station Winter access",
                    "Subtitle": "",
                    "Description": "Front entrance ski in ski out",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/16/49/233329_f03f8bc6-f395-4f7e-8d8f-ab865678605a_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "c99c847a-d9c2-4e49-a90f-3ac9a50c1562",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Guard Station Sunset",
                    "Subtitle": "",
                    "Description": "Sunsets and ski in, ski out",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/17/26/233329_7df76985-4009-4fff-8c52-7170a506d4ba_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "b2c35cf2-30b7-43d0-9dde-55053905c951",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane Guard Station",
                    "Subtitle": "",
                    "Description": "Guard Station in the Winter",
                    "EmbedCode": "",
                    "Height": 810,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/16/47/233329_65ffb12d-510f-4aa3-9ab4-190e279942d7_1440.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "fa270f0d-7480-4d6d-8976-6bab85b4e860",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane Campground area",
                    "Subtitle": "",
                    "Description": "The cabin is located within the campground",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/17/28/233329_52208048-f85e-44b1-b32f-404dd477faac_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "966c0837-3ec5-4f90-afef-c4d2b2d81084",
                    "MediaType": "Image",
                    "EntityID": "233329",
                    "EntityType": "Facility",
                    "Title": "Tilly Jane Campground",
                    "Subtitle": "",
                    "Description": "Area surrounding the cabin",
                    "EmbedCode": "",
                    "Height": 934,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/08/17/05/233329_56a237d0-3f1c-40f7-bb3a-4489d420467e_700.jpg",
                    "Credits": "Jenn Fortin",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232854",
            "LegacyFacilityID": "71639",
            "OrgFacilityID": "AN371639",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "KINGFISHER",
            "FacilityDescription": "<h2>Overview</h2>\nKingfisher Campground is a diamond in the rough. Its unkempt appearance gives it a true nature feel, yet it offers numerous modern conveniences and is close to a variety of recreational opportunities. It lies next to the scenic Hot Springs Fork of Collawash River, a tributary to the Wild and Scenic Clackamas River nearby. <h2>Recreation</h2>\nCatch and release fishing for trout is allowed on the main fork of the Collawash, but the streams are closed to fishing. Whitewater rafting and kayaking are popular activities in the area. At least one 5-mile stretch of the more than 17-mile river boasts class III-IV whitewater.\n<br /><br />\nVisitors enjoy hiking in the Bull of the Woods Wilderness, which is south of the campground and offers numerous trailheads. Several primitive forest roads nearby are open to mountain biking. The Cascades Scenic Byway, which follows the Clackamas River, is not far from the campground.<h2>Facilities</h2>\nThe campground offers nearly two dozen single-family sites for tent and RV camping. RVs larger than 19 feet, however, may have difficulty negotiating tight turns within the campground. No utility hookups are available. Parking surfaces are either paved or gravel.\n<br /><br />\nEach site is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided. Firewood is available for purchase at the campground.<h2>Natural Features</h2>\nThe campground is located in the Mt. Hood National Forest along the banks of the Hot Springs Fork of Collawash River, just north of the Bull of the Woods Wilderness. It is situated in a mixed evergreen forest at an elevation of about 1,250 feet. A variety of birds and wildlife make their homes in the area.\n<h2>Nearby Attractions</h2>\nKingfisher Campground is at the center of the Mt. Hood National Forest, where a variety of tourist attractions and historic sites draw thousands of visitors every year. A map of the area can be found at the Ripplebrook Camp Store about 9 miles north of the campground.\n<br /><br />\nBagby Hot Springs is located about 5 miles southwest of the campground. A popular site for soaking and relaxing, the springs are in a heavily wooded area. The available bathhouses are fed by three major hot water springs and several minor outlets in the area. A historic guard station was built there in 1913. \n<br /><br />\nThe city of Estacada is 35 miles northwest of the campground, with a variety of dining and shopping options, groceries and fuel. ",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, travel east on Highway 224 for 26 miles, then turn right on Road 46 and continue for 5 miles. Turn onto Road 63 and continue for 4 miles. Turn onto Road 70 and continue about 2 miles to the campground.\n",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.0897222,
                    44.9769444
                ]
            },
            "FacilityLongitude": -122.0897222,
            "FacilityLatitude": 44.9769444,
            "Keywords": "KIN1,MT. HOOD NF - FS,Flaming Gorge National Recreation Area",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438202",
                    "FacilityID": "232854",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232854",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232854",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232854",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232854",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232854",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232854",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "9dd04147e1eadf02b9fcb91703b49be0",
                    "LinkType": "Other",
                    "EntityID": "232854",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "7dfe88c27b90b9d2f781dc7186c97259",
                    "LinkType": "Other",
                    "EntityID": "232854",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "56adee29aec2f0b7a1bf5936ff5ec910",
                    "LinkType": "Other",
                    "EntityID": "232854",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "c8065fa06a388fee927a904ff4967dca",
                    "LinkType": "Other",
                    "EntityID": "232854",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71639_KIN1.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "727afc31-40e0-46ae-9a4b-b2d10c6d01e1",
                    "MediaType": "Image",
                    "EntityID": "232854",
                    "EntityType": "Facility",
                    "Title": "Mt. Hood National Forest",
                    "Subtitle": "",
                    "Description": "Mt. Hood National Forest",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/08/08/18/23/232854_dd612fcf-d4c2-436f-bd91-af3a6a8eb4a9_1440.jpeg",
                    "Credits": "Share the Experience,  Steve Schwindt",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "f82d44de-c4dc-4abc-a474-2284ad7a31c2",
                    "MediaType": "Image",
                    "EntityID": "232854",
                    "EntityType": "Facility",
                    "Title": "Mt. Hood National Forest",
                    "Subtitle": "",
                    "Description": "Mt. Hood National Forest",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/08/08/18/24/232854_677e6387-4f22-4f32-a74f-fabc9326a084_700.jpeg",
                    "Credits": "Share the Experience, Larry Chow",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ]
        },
        {
            "FacilityID": "232866",
            "LegacyFacilityID": "71652",
            "OrgFacilityID": "AN371652",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "GONE CREEK ",
            "FacilityDescription": "<h2>Overview</h2>\nGone Creek Campground sits on the edge of the beautiful Timothy Lake, in the shadows of Mt. Hood, Oregon's highest peak. The lush, green forest surrounding the campground provides campers with ample recreational opportunities.<h2>Recreation</h2>\nProximity to Timothy Lake allows campers to enjoy a variety of water-related recreation activities, including boating and sailing, as well as swimming, windsurfing and fishing. Anglers can expect a catch of kokanee salmon and a variety of trout.  \n\nA range of trails are located in the area. The Timothy Lake Trail is popular for hiking, mountain biking and horseback riding. The 12 miles of relatively level terrain loops trekkers around the lake, providing scenic views of the area. It connects to the Pacific Crest National Scenic Trail, a lengthy hike that extends across three states, from the borders of Canada and Mexico. Portions of that trail also lead southwest to Clackamas Lake Campground.\n   \nThe Clackamas Lake Ranger Station Historic District is less than 2 miles from the campground. It was built to house forest service workers in the early 1900s. The rustic architecture and historic nature of the buildings and the surrounding area draws thousands of tourists each year.<h2>Facilities</h2>\n<p>The campground offers dozens of single-family campsites for tent and RV camping. Each site is equipped with tables and campfire rings with grills. Accessible vault toilets and drinking water are provided. A campground host is available on-site to answer questions.</p>\n\n<p>The nearest gas station/convenience store is about 18 miles away, west on Hwy. 26. The nearest grocery store is in Government Camp, about 23 miles away, west on Hwy. 26.</p>\n<h2>Natural Features</h2>\nThe campground is situated on the south shore of the roughly 1,400-acre lake, at an elevation of 3,400 feet. Timothy Lake was created in 1956 as a storage reservoir for the Oak Grove Hydroelectric Project. It is one of the larger lakes in the Mt. Hood National Forest. The campground is nestled in a mixed conifer forest, with many sites with views of the water's edge.\n\n<h2>Nearby Attractions</h2>\nGone Creek is about 28 miles from the base of majestic Mt. Hood, the highest point in Oregon. The historic Timberline Lodge in Government Camp offers scenic views of the snow-capped mountain.\n<h2>Charges &amp; Cancellations</h2>\n<p>A service fee will apply if you change or cancel your reservation. Late cancellations are subject to additional fees. For full details see the Recreation.Gov Rules & Reservation Policies.</p>\n",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "Payment in-full will be charged to your credit card upon completion of the reservation. A non-refundable online reservation fee may be charged for some facilities. ",
            "FacilityDirections": "From Sandy, Oregon, travel east on Highway 26 for approximately 40 miles to Skyline Road/Road 42. Turn right on Skyline Road and continue south for about 9 miles. Turn right on Forest Service Road 57 and travel west for 1 mile, then turn right again at the Gone Creek Campground entrance sign.\n",
            "FacilityPhone": "503-464-8515",
            "FacilityEmail": "",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.7752778,
                    45.1127778
                ]
            },
            "FacilityLongitude": -121.7752778,
            "FacilityLatitude": 45.1127778,
            "Keywords": "GONE,MT. HOOD NF - FS,Timothy Lake",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438214",
                    "FacilityID": "232866",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "Skyline Rd",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "Timothy Lake",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 100017,
                    "FacilityID": "232866",
                    "ActivityName": "BIRDING",
                    "FacilityActivityDescription": "Birding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100008,
                    "FacilityID": "232866",
                    "ActivityName": "CANOEING",
                    "FacilityActivityDescription": "Canoeing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100060,
                    "FacilityID": "232866",
                    "ActivityName": "CRAWFISHING",
                    "FacilityActivityDescription": "Crawfishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100026,
                    "FacilityID": "232866",
                    "ActivityName": "EVENING PROGRAMS",
                    "FacilityActivityDescription": "Evening Programs",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 15,
                    "FacilityID": "232866",
                    "ActivityName": "HORSEBACK RIDING",
                    "FacilityActivityDescription": "Horseback Riding",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 34,
                    "FacilityID": "232866",
                    "ActivityName": "SWIMMING SITE",
                    "FacilityActivityDescription": "Swimming Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "232866",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232866",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232866",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 10,
                    "FacilityID": "232866",
                    "ActivityName": "INTERPRETIVE PROGRAMS",
                    "FacilityActivityDescription": "Interpretive Programs",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232866",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 8,
                    "FacilityID": "232866",
                    "ActivityName": "HISTORIC & CULTURAL SITE",
                    "FacilityActivityDescription": "Historic & Cultural Site",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232866",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232866",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Biking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100043,
                    "FacilityID": "232866",
                    "ActivityName": "AMPHITHEATER",
                    "FacilityActivityDescription": "Amphitheater",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100009,
                    "FacilityID": "232866",
                    "ActivityName": "BERRY PICKING",
                    "FacilityActivityDescription": "Berry Picking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 105,
                    "FacilityID": "232866",
                    "ActivityName": "PADDLING",
                    "FacilityActivityDescription": "Paddling",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100000,
                    "FacilityID": "232866",
                    "ActivityName": "MOTOR BOAT",
                    "FacilityActivityDescription": "Motor Boat",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100018,
                    "FacilityID": "232866",
                    "ActivityName": "NON-MOTORIZED BOATING",
                    "FacilityActivityDescription": "Non-Motorized Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 20,
                    "FacilityID": "232866",
                    "ActivityName": "PICNICKING",
                    "FacilityActivityDescription": "Picnicking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 104,
                    "FacilityID": "232866",
                    "ActivityName": "PHOTOGRAPHY",
                    "FacilityActivityDescription": "Photography",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100037,
                    "FacilityID": "232866",
                    "ActivityName": "SAILING",
                    "FacilityActivityDescription": "Sailing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 106,
                    "FacilityID": "232866",
                    "ActivityName": "SWIMMING",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100015,
                    "FacilityID": "232866",
                    "ActivityName": "STAR GAZING",
                    "FacilityActivityDescription": "Star Gazing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100019,
                    "FacilityID": "232866",
                    "ActivityName": "WATER ACCESS",
                    "FacilityActivityDescription": "Water Access",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 100006,
                    "FacilityID": "232866",
                    "ActivityName": "WATER ACTIVITIES",
                    "FacilityActivityDescription": "Water Activities",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "4b677bd8a32a3bec188878c473850e9f",
                    "LinkType": "Other",
                    "EntityID": "232866",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "c1e3304b062e420b9c505e21ead47e52",
                    "LinkType": "Other",
                    "EntityID": "232866",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "ae72fd417822dd6397e81f48a8b5ede8",
                    "LinkType": "Other",
                    "EntityID": "232866",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71652_GONE.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "904535a5-b916-4be8-a51c-4653ef0dcbb2",
                    "MediaType": "Image",
                    "EntityID": "232866",
                    "EntityType": "Facility",
                    "Title": "View of Mount Hood from Gone Creek",
                    "Subtitle": "",
                    "Description": "Mount Hood",
                    "EmbedCode": "",
                    "Height": 338,
                    "Width": 450,
                    "URL": "https://cdn.recreation.gov/public/2018/08/14/22/09/0080abac-352d-4420-9180-2cc857d6f8f0_450.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2573741",
                    "MediaType": "Image",
                    "EntityID": "232866",
                    "EntityType": "Facility",
                    "Title": "Restrooms at Gone Creek",
                    "Subtitle": "",
                    "Description": "Restrooms",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67026.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "9f840ac5-4c24-4e5a-8299-62e155e7a677",
                    "MediaType": "Image",
                    "EntityID": "232866",
                    "EntityType": "Facility",
                    "Title": "Kayaks on the shore at Gone Creek",
                    "Subtitle": "",
                    "Description": "Kayaking is popular on Timothy Lake",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2020/12/03/23/51/232866_f8b78c39-dfee-483a-9c2f-fd096cb528e0_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "ae7b3bac-c870-4f68-899d-c7eee3e81e60",
                    "MediaType": "Image",
                    "EntityID": "232866",
                    "EntityType": "Facility",
                    "Title": "View of Mount Hood from Gone Creek",
                    "Subtitle": "",
                    "Description": "Mt. Hood",
                    "EmbedCode": "",
                    "Height": 810,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2020/12/03/23/50/232866_df318ecc-1ecb-4ed2-a4b0-bf683522ff0e_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ]
        },
        {
            "FacilityID": "232840",
            "LegacyFacilityID": "71623",
            "OrgFacilityID": "AN371623",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "RIVERSIDE (OR)",
            "FacilityDescription": "<h2>Overview</h2>\nRiverside Campground is a charming and rustic campground, situated alongside the Wild and Scenic Clackamas River in Mt. Hood National Forest. It provides access to a variety of hiking, mountain biking and horseback riding trails and is a great place to experience nature.<h2>Recreation</h2>\nFishing is very popular in the Oak Fork and anglers can expect a catch of winter steelhead, spring Chinook and late summer Kokanee salmon, as well as other species of freshwater fish. The Clackamas River also provides miles of wild water as it bends through the scenic Cascade range, making whitewater rafting a popular activity.\n<br /><br />\nThe 5-mile Riverside National Recreation Trail, popular for hiking and mountain biking, is located not far from the campground. The surrounding area provides numerous additional opportunities for hiking.<h2>Facilities</h2>\nThe campground offers more than a dozen single-family sites for tent and small RV camping. Each site is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided, but no hookups are available. Parking surfaces are paved and gravel.<h2>Natural Features</h2>\nThe campground is located in Mt. Hood National Forest along the Oak Grove Fork of the Clackamas River at an elevation of about 1,400 feet. Huge maple and Douglas fir trees cover the area, and dense shrubbery provides some privacy between campsites. The campground is not far from the Ripplebrook Ranger Station and Ripplebrook Pond.\n<br /><br />\nThe river provides habitat for the federally protected bald eagle and northern spotted owl, as well as an occasional peregrine falcon. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nBagby Hot Springs is located about 14 miles southwest of the campground. A popular site for soaking and relaxing, the springs are in a heavily wooded area in the scenic Cascade Range. The available bathhouses are fed by three major hot water springs and several minor outlets in the area. A historic guard station was built there in 1913.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, travel east on Highway 224 for approximately 26 miles, then keep right onto Highway 46 for approximately 2 miles to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.0605556,
                    45.0433333
                ]
            },
            "FacilityLongitude": -122.0605556,
            "FacilityLatitude": 45.0433333,
            "Keywords": "RIVX,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438188",
                    "FacilityID": "232840",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232840",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232840",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232840",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232840",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232840",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 5,
                    "FacilityID": "232840",
                    "ActivityName": "BIKING",
                    "FacilityActivityDescription": "Mountain Biking",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "5ebfc2f36505b93659cbcbe716acbd40",
                    "LinkType": "Other",
                    "EntityID": "232840",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "2d1d1434cf9a4e83291d6ca753ec0ffd",
                    "LinkType": "Other",
                    "EntityID": "232840",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "4a4c36c5384dddd9148b84dedf69b1c2",
                    "LinkType": "Other",
                    "EntityID": "232840",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "cd50a0b787392dd479f1400b1895eb73",
                    "LinkType": "Other",
                    "EntityID": "232840",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71623_RIVX.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573497",
                    "MediaType": "Image",
                    "EntityID": "232840",
                    "EntityType": "Facility",
                    "Title": "RIVERSIDE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66977.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573506",
                    "MediaType": "Image",
                    "EntityID": "232840",
                    "EntityType": "Facility",
                    "Title": "RIVERSIDE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67048.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573492",
                    "MediaType": "Image",
                    "EntityID": "232840",
                    "EntityType": "Facility",
                    "Title": "RIVERSIDE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66906.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573504",
                    "MediaType": "Image",
                    "EntityID": "232840",
                    "EntityType": "Facility",
                    "Title": "RIVERSIDE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67041.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573495",
                    "MediaType": "Image",
                    "EntityID": "232840",
                    "EntityType": "Facility",
                    "Title": "RIVERSIDE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66951.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232845",
            "LegacyFacilityID": "71628",
            "OrgFacilityID": "AN371628",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "RAINBOW (OR)",
            "FacilityDescription": "<h2>Overview</h2>\nRainbow Campground provides ample access to the Wild and Scenic Clackamas River. The campground offers a great location to enjoy peace and quiet in the beautiful mountains of northern Oregon. Visitors enjoy fishing, hiking, biking and rafting.<h2>Recreation</h2>\nFishing is very popular in the Oak Fork and anglers can expect a catch of winter steelhead, spring Chinook and late summer Kokanee salmon, as well as other species of freshwater fish. The Clackamas River also provides miles of wild water as it bends through the scenic Cascade range, making whitewater rafting a popular activity.\n<br /><br />\nThe 5-mile Riverside National Recreation Trail, popular for hiking and mountain biking, is located not far from the campground. The surrounding area provides numerous additional opportunities for hiking.<h2>Facilities</h2>\nThe campground offers more than a dozen single-family sites for tent camping. Each site is equipped with a table and campfire ring with grill. Accessible vault toilets and drinking water are provided. Parking surfaces are paved and gravel.<h2>Natural Features</h2>\nThe campground is located in Mt. Hood National Forest along the Oak Grove Fork of the Clackamas River at an elevation of about 1,400 feet. Huge maple and Douglas fir trees cover the area, and dense shrubbery provides some privacy between campsites. The campground is not far from the Ripplebrook Ranger Station and Ripplebrook Pond.\n<br /><br />\nThe river provides habitat for the federally protected bald eagle and northern spotted owl, as well as an occasional peregrine falcon. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nBagby Hot Springs is located about 14 miles southwest of the campground. A popular site for soaking and relaxing, the springs are in a heavily wooded area in the scenic Cascade Range. The available bathhouses are fed by three major hot water springs and several minor outlets in the area. A historic guard station was built there in 1913.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Estacada, travel east on Highway 224/Road 46 for 26 miles to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -122.0433333,
                    45.0775
                ]
            },
            "FacilityLongitude": -122.0433333,
            "FacilityLatitude": 45.0775,
            "Keywords": "RAIB,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438193",
                    "FacilityID": "232845",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 26,
                    "FacilityID": "232845",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 25,
                    "FacilityID": "232845",
                    "ActivityName": "WATER SPORTS",
                    "FacilityActivityDescription": "Whitewater Rafting",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 14,
                    "FacilityID": "232845",
                    "ActivityName": "HIKING",
                    "FacilityActivityDescription": "Hiking",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 11,
                    "FacilityID": "232845",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232845",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "b3fd71d719fbb9e3fd992d8da2710f4c",
                    "LinkType": "Other",
                    "EntityID": "232845",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "879d5e5367ae5c22c1af3453a28c2951",
                    "LinkType": "Other",
                    "EntityID": "232845",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "8dbe113b3d1261072f1ed443f35e310e",
                    "LinkType": "Other",
                    "EntityID": "232845",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "36ed4007f6d833379ad6d0f8d1faa160",
                    "LinkType": "Other",
                    "EntityID": "232845",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71628_RAIB.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573616",
                    "MediaType": "Image",
                    "EntityID": "232845",
                    "EntityType": "Facility",
                    "Title": "RAINBOW (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66887.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573744",
                    "MediaType": "Image",
                    "EntityID": "232845",
                    "EntityType": "Facility",
                    "Title": "RAINBOW (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67029.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573733",
                    "MediaType": "Image",
                    "EntityID": "232845",
                    "EntityType": "Facility",
                    "Title": "RAINBOW (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67015.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573608",
                    "MediaType": "Image",
                    "EntityID": "232845",
                    "EntityType": "Facility",
                    "Title": "RAINBOW (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66879.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573705",
                    "MediaType": "Image",
                    "EntityID": "232845",
                    "EntityType": "Facility",
                    "Title": "RAINBOW (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66984.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        },
        {
            "FacilityID": "232849",
            "LegacyFacilityID": "71633",
            "OrgFacilityID": "AN371633",
            "ParentOrgID": "131",
            "ParentRecAreaID": "1106",
            "FacilityName": "CLEAR LAKE (OR)",
            "FacilityDescription": "<h2>Overview</h2>\nClear Lake Campground is a shady outdoor paradise ON Clear Lake in the mountains of northern Oregon. Visitors enjoy boating, fishing, swimming and sailing on the lake, and hiking and exploring the nearby hills and terraces. Winter recreation opportunities are available in the area when it snows.<h2>Recreation</h2>\nBoating is popular on the lake, however speeds are limited to 10 mph. A steady breeze keeps bugs away at the campground, and also propels sailboats on the lake. Swimming and fishing are available. Anglers can expect to find a variety of trout. \n<br /><br />\nVisitors enjoy picnicking in the day use area near the boat ramp. A hiking trail begins near the north end of the lake, connecting to the Pacific Crest Trail. \n<br /><br />\nIn the winter, miles of snow-covered roads and trails crisscross the forest. Shellrock Creek and High Rock, off Forest Road 57, are open to cross-country skiers and snowmobile enthusiasts.<h2>Facilities</h2>\nThe campground offers single-family sites for tent and RV camping. Each site is equipped with a table and campfire ring with grill. Vault toilets, drinking water and trash collection are provided, but utility hookups are not available. Parking surfaces are gravel and dirt. Firewood can be purchased from the host.<h2>Natural Features</h2>\nThe campground is located in a mixed conifer forest, just north of Warm Springs Indian Reservation, in Mt. Hood National Forest. It is situated on the eastern shore of the 560-acre lake, at an elevation of 3,600. Clear Lake is used primarily for irrigation purposes.\n<br /><br />\nWild mushrooms are abundant in the area during late summer and early fall. A variety of wildlife makes its home in the area.\n<h2>Nearby Attractions</h2>\nThe small Mt. Hood village of Government Camp is 12 miles northwest of the campground. The area offers a visitor center, restaurants and year-round skiing, as well as scenic views.",
            "FacilityTypeDescription": "Campground",
            "FacilityUseFeeDescription": "",
            "FacilityDirections": "From Sandy, travel east on Highway 26 for about 35 miles. Turn onto Forest Road 2630 and continue for 1 mile to the campground.",
            "FacilityPhone": "503-630-5721",
            "FacilityEmail": "clm@clm-services.com",
            "FacilityReservationURL": "",
            "FacilityMapURL": "",
            "FacilityAdaAccess": "N",
            "GEOJSON": {
                "TYPE": "Point",
                "COORDINATES": [
                    -121.6963889,
                    45.1811111
                ]
            },
            "FacilityLongitude": -121.6963889,
            "FacilityLatitude": 45.1811111,
            "Keywords": "CLLA,MT. HOOD NF - FS",
            "StayLimit": "",
            "Reservable": true,
            "Enabled": true,
            "LastUpdatedDate": "2021-05-19",
            "CAMPSITE": [],
            "PERMITENTRANCE": [],
            "TOUR": [],
            "ORGANIZATION": [
                {
                    "OrgID": "131",
                    "OrgName": "USDA Forest Service",
                    "OrgImageURL": "fs.jpg",
                    "OrgURLText": "",
                    "OrgURLAddress": "http://www.fs.fed.us",
                    "OrgType": "Federal Agency",
                    "OrgAbbrevName": "FS",
                    "OrgJurisdictionType": "State",
                    "OrgParentID": "163",
                    "LastUpdatedDate": "2018-06-26"
                }
            ],
            "RECAREA": [
                {
                    "RecAreaID": "1106",
                    "RecAreaName": "Mt. Hood National Forest",
                    "ResourceLink": "https://ridb.recreation.gov/api/v1/recareas/1106"
                }
            ],
            "FACILITYADDRESS": [
                {
                    "FacilityAddressID": "20438197",
                    "FacilityID": "232849",
                    "FacilityAddressType": "Default",
                    "FacilityStreetAddress1": "",
                    "FacilityStreetAddress2": "",
                    "FacilityStreetAddress3": "",
                    "City": "",
                    "PostalCode": "",
                    "AddressStateCode": "OR",
                    "AddressCountryCode": "USA",
                    "LastUpdatedDate": "2021-05-19"
                }
            ],
            "ACTIVITY": [
                {
                    "ActivityID": 11,
                    "FacilityID": "232849",
                    "ActivityName": "FISHING",
                    "FacilityActivityDescription": "Fishing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 9,
                    "FacilityID": "232849",
                    "ActivityName": "CAMPING",
                    "FacilityActivityDescription": "Camping",
                    "FacilityActivityFeeDescription": "Camping"
                },
                {
                    "ActivityID": 6,
                    "FacilityID": "232849",
                    "ActivityName": "BOATING",
                    "FacilityActivityDescription": "Boating",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 34,
                    "FacilityID": "232849",
                    "ActivityName": "SWIMMING SITE",
                    "FacilityActivityDescription": "Swimming",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 26,
                    "FacilityID": "232849",
                    "ActivityName": "WILDLIFE VIEWING",
                    "FacilityActivityDescription": "Wildlife Viewing",
                    "FacilityActivityFeeDescription": ""
                },
                {
                    "ActivityID": 22,
                    "FacilityID": "232849",
                    "ActivityName": "WINTER SPORTS",
                    "FacilityActivityDescription": "Cross Country Skiing",
                    "FacilityActivityFeeDescription": ""
                }
            ],
            "EVENT": [],
            "LINK": [
                {
                    "EntityLinkID": "c49a80ff39e27bf2ae1d00b63bd03432",
                    "LinkType": "Other",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "Forest Service Concessionaire",
                    "Description": "Northwest Land Management",
                    "URL": "http://www.clm-services.com"
                },
                {
                    "EntityLinkID": "af9653e7fa6f1350dbc69b9255acfe65",
                    "LinkType": "Other",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "Oregon State Road Conditions",
                    "Description": "Oregon State Road Conditions",
                    "URL": "http://www.oregon.gov/odot/"
                },
                {
                    "EntityLinkID": "f7ad3754ffefdaef2b5d41c7944ee398",
                    "LinkType": "Other",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "Oregon State Tourism",
                    "Description": "Oregon State Tourism",
                    "URL": "http://traveloregon.com"
                },
                {
                    "EntityLinkID": "56028e85ff6446eec0284ff5017afa3a",
                    "LinkType": "Other",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "Print Facility Map",
                    "Description": "Print Facility Map",
                    "URL": "http://www.recreation.gov/webphotos/facilitymaps/71633_CLLA.pdf"
                }
            ],
            "MEDIA": [
                {
                    "EntityMediaID": "2573673",
                    "MediaType": "Image",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66947.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573628",
                    "MediaType": "Image",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66899.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573754",
                    "MediaType": "Image",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67040.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573708",
                    "MediaType": "Image",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/66987.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573779",
                    "MediaType": "Image",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67071.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                },
                {
                    "EntityMediaID": "2573725",
                    "MediaType": "Image",
                    "EntityID": "232849",
                    "EntityType": "Facility",
                    "Title": "CLEAR LAKE (OR)",
                    "Subtitle": "",
                    "Description": "",
                    "EmbedCode": "",
                    "Height": 360,
                    "Width": 540,
                    "URL": "https://cdn.recreation.gov/public/images/67006.jpg",
                    "Credits": "",
                    "IsPrimary": false,
                    "IsPreview": false,
                    "IsGallery": true
                }
            ]
        }
    ],
    "METADATA": {
        "RESULTS": {
            "CURRENT_COUNT": 44,
            "TOTAL_COUNT": 44
        },
        "SEARCH_PARAMETERS": {
            "QUERY": "",
            "LIMIT": 1000,
            "OFFSET": 0
        }
    }
};


// https://ridb.recreation.gov/api/v1/facilities/251452/campsites?query=overnight&limit=1000&offset=0

const dummyDataCampsite = {
    "RECDATA": [
        {
            "CampsiteID": "96161",
            "FacilityID": "251452",
            "CampsiteName": "014",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.771379370665,
            "CampsiteLatitude": 45.1437992697616,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "45"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "9c928836-4378-43e6-a4a8-358502b64919",
                    "MediaType": "Image",
                    "EntityID": "96161",
                    "EntityType": "Campsite",
                    "Title": "Site 14",
                    "Subtitle": "",
                    "Description": "Site 14",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/02/96161_308dab2b-e6a1-415c-9a29-067cfbd3fb2a_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "2aa58e6e-363f-4425-a7cd-1fd85ddd2859",
                    "MediaType": "Image",
                    "EntityID": "96161",
                    "EntityType": "Campsite",
                    "Title": "Site 14",
                    "Subtitle": "",
                    "Description": "Site 14",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/02/96161_48f0e926-1dec-414d-b268-59bb1d65e7f2_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96143",
            "FacilityID": "251452",
            "CampsiteName": "012",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.772264231089,
            "CampsiteLatitude": 45.1435227065201,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "45"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "59b67a00-1cdb-48de-8836-b9f846ee786a",
                    "MediaType": "Image",
                    "EntityID": "96143",
                    "EntityType": "Campsite",
                    "Title": "Site 12",
                    "Subtitle": "",
                    "Description": "Site 12",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/00/96143_01eb1d8f-9c09-4de7-a859-561637359b22_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "27a9f6bc-e0a6-41a2-bafc-ef1fff4f3c9e",
                    "MediaType": "Image",
                    "EntityID": "96143",
                    "EntityType": "Campsite",
                    "Title": "Site 12",
                    "Subtitle": "",
                    "Description": "Site 12",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/00/96143_d8776c33-7562-4e24-b9d1-1895911b343f_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96124",
            "FacilityID": "251452",
            "CampsiteName": "005",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "HIKE IN",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.771473967942,
            "CampsiteLatitude": 45.1412406073794,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Hike In Distance to Site",
                    "AttributeValue": "400"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Site Access",
                    "AttributeValue": "Hike-In"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "1"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "25"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "4"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "d8d58587-7e1e-491c-b104-6e08b41e8ea5",
                    "MediaType": "Image",
                    "EntityID": "96124",
                    "EntityType": "Campsite",
                    "Title": "Site 5",
                    "Subtitle": "",
                    "Description": "Site 5",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/49/96124_449367e4-e570-4a6b-ba8d-751a68824263_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "190c8d78-bec7-42b2-9cb3-8e04473d1955",
                    "MediaType": "Image",
                    "EntityID": "96124",
                    "EntityType": "Campsite",
                    "Title": "Site 5",
                    "Subtitle": "",
                    "Description": "Site 5",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/49/96124_8ac6c3bc-983d-4bb3-a680-85d6b011de85_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "SMALL TENT",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96018",
            "FacilityID": "251452",
            "CampsiteName": "004",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.770755730759,
            "CampsiteLatitude": 45.1429977097364,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "25"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "13bfed89-713a-42c5-808b-8574002dc0a8",
                    "MediaType": "Image",
                    "EntityID": "96018",
                    "EntityType": "Campsite",
                    "Title": "Site 4",
                    "Subtitle": "",
                    "Description": "Site 4",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/48/96018_6f8097ab-9d0b-42d9-952a-1997072a1b96_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "b7afe92d-e22e-4984-904c-ee239fc0d8dd",
                    "MediaType": "Image",
                    "EntityID": "96018",
                    "EntityType": "Campsite",
                    "Title": "Site 4",
                    "Subtitle": "",
                    "Description": "Site 4",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/47/96018_e9100167-6716-4d1a-a642-e1e6310485f2_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96157",
            "FacilityID": "251452",
            "CampsiteName": "009",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": true,
            "CampsiteLongitude": -121.771850320933,
            "CampsiteLatitude": 45.1424624044058,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Accessible Occupant Message",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Accessibility",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "35"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "8fda6e4a-da6e-4a9b-b8be-2d0c2720c9b4",
                    "MediaType": "Image",
                    "EntityID": "96157",
                    "EntityType": "Campsite",
                    "Title": "Site 9",
                    "Subtitle": "",
                    "Description": "Site 9",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/53/96157_0c256f41-d200-4719-9674-24060c7cf9cb_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "549aa93a-f90f-4a8e-9fc0-21505152ab37",
                    "MediaType": "Image",
                    "EntityID": "96157",
                    "EntityType": "Campsite",
                    "Title": "Site 9",
                    "Subtitle": "",
                    "Description": "Site 9",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/54/96157_e2f90ce5-f011-417c-8441-5d4f77cac100_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96017",
            "FacilityID": "251452",
            "CampsiteName": "013",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.771796617775,
            "CampsiteLatitude": 45.1434364756894,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "40"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "371e7dea-671f-4be0-8ccf-880341ed3c3a",
                    "MediaType": "Image",
                    "EntityID": "96017",
                    "EntityType": "Campsite",
                    "Title": "Site 13",
                    "Subtitle": "",
                    "Description": "Site 13",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/01/96017_0ceb8769-9c65-4588-8409-f1454e20289b_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "d8d79754-aedf-4de9-99f2-22c1d66299cc",
                    "MediaType": "Image",
                    "EntityID": "96017",
                    "EntityType": "Campsite",
                    "Title": "Site 13",
                    "Subtitle": "",
                    "Description": "Site 13",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/01/96017_813422a7-2a1e-48b2-9ce8-dcaa779fe3ef_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96132",
            "FacilityID": "251452",
            "CampsiteName": "003",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.770451976861,
            "CampsiteLatitude": 45.1434848944447,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "45"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "149e8f73-04e0-404b-b181-74dadd4feafe",
                    "MediaType": "Image",
                    "EntityID": "96132",
                    "EntityType": "Campsite",
                    "Title": "Site 3",
                    "Subtitle": "",
                    "Description": "Site 3",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/46/96132_a955e9da-fe92-4307-afbc-62281b6beb1b_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "8b519aa3-fd8e-452a-befe-05299800cd73",
                    "MediaType": "Image",
                    "EntityID": "96132",
                    "EntityType": "Campsite",
                    "Title": "Site 3",
                    "Subtitle": "",
                    "Description": "Site 3",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/46/96132_34d02bfc-70a3-4513-a32a-4a80ba4a8fca_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96139",
            "FacilityID": "251452",
            "CampsiteName": "006",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "HIKE IN",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.771608673637,
            "CampsiteLatitude": 45.1409369748563,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "4"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Hike In Distance to Site",
                    "AttributeValue": "425"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Site Access",
                    "AttributeValue": "Hike-In"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "25"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "1"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "8e42da4d-853f-4964-b943-9e7cac28d647",
                    "MediaType": "Image",
                    "EntityID": "96139",
                    "EntityType": "Campsite",
                    "Title": "Site 6",
                    "Subtitle": "",
                    "Description": "Site 6",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/51/96139_cb3aee1e-1d9c-42cf-8150-a3bc61821d4e_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "d04e35db-9b34-47fa-9e69-5cab83c5715a",
                    "MediaType": "Image",
                    "EntityID": "96139",
                    "EntityType": "Campsite",
                    "Title": "Site 6",
                    "Subtitle": "",
                    "Description": "Site 6",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/51/96139_303c50bc-2424-47a6-9abe-791892fa8314_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "SMALL TENT",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96081",
            "FacilityID": "251452",
            "CampsiteName": "016",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.770754445431,
            "CampsiteLatitude": 45.1442653417028,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "45"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "349b154e-db51-4dd8-a53b-32c6c011bc2d",
                    "MediaType": "Image",
                    "EntityID": "96081",
                    "EntityType": "Campsite",
                    "Title": "Site 16",
                    "Subtitle": "",
                    "Description": "Site 16",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/04/96081_4058771e-8cd8-48aa-8129-bc27d93b6127_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "039859eb-c003-4b8e-8215-06a20af2bd1f",
                    "MediaType": "Image",
                    "EntityID": "96081",
                    "EntityType": "Campsite",
                    "Title": "Site 16",
                    "Subtitle": "",
                    "Description": "Site 16",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/04/96081_81347c84-9593-4944-8bf9-c8e62810b7b7_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96087",
            "FacilityID": "251452",
            "CampsiteName": "002",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.7702339262,
            "CampsiteLatitude": 45.143857742407,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Pull-Through"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "50"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "701c6105-b9be-4259-83bd-16d860a40574",
                    "MediaType": "Image",
                    "EntityID": "96087",
                    "EntityType": "Campsite",
                    "Title": "Site 2",
                    "Subtitle": "",
                    "Description": "Site 2",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/19/96087_7432bd44-0510-4b45-9c11-47e078ef418a_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "be5b265d-4be7-44b8-801f-0d1b34a47f27",
                    "MediaType": "Image",
                    "EntityID": "96087",
                    "EntityType": "Campsite",
                    "Title": "Site 2",
                    "Subtitle": "",
                    "Description": "Site 2",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/44/96087_bf6886bb-c7cf-4c86-9eb3-e2a9b71ba68d_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96090",
            "FacilityID": "251452",
            "CampsiteName": "018",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.770423290161,
            "CampsiteLatitude": 45.1451110527578,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "35"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "ead2b433-7082-4559-a4a5-83f3abbc4096",
                    "MediaType": "Image",
                    "EntityID": "96090",
                    "EntityType": "Campsite",
                    "Title": "Site 18",
                    "Subtitle": "",
                    "Description": "Site 18",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/06/96090_b6906de7-0a4e-4c95-a25e-305b9a9c0e21_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "a1729697-9e14-46dc-ad29-133dba06076b",
                    "MediaType": "Image",
                    "EntityID": "96090",
                    "EntityType": "Campsite",
                    "Title": "Site 18",
                    "Subtitle": "",
                    "Description": "Site 18",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/06/96090_1d10016a-d447-4e27-9ac4-2e7731f245a0_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96010",
            "FacilityID": "251452",
            "CampsiteName": "007",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "HIKE IN",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.771574151693,
            "CampsiteLatitude": 45.1405950210229,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Hike In Distance to Site",
                    "AttributeValue": "450"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Site Access",
                    "AttributeValue": "Hike-In"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "25"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "1"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "4"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "9a0ccd37-dbdc-4060-bc96-7252d275711f",
                    "MediaType": "Image",
                    "EntityID": "96010",
                    "EntityType": "Campsite",
                    "Title": "Site 7",
                    "Subtitle": "",
                    "Description": "Site 7",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/52/96010_583d940c-7de4-44f7-b2d5-019f406f8a2d_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "6c7759c2-0a4a-4a90-94a2-67621d3de9f2",
                    "MediaType": "Image",
                    "EntityID": "96010",
                    "EntityType": "Campsite",
                    "Title": "Site 7",
                    "Subtitle": "",
                    "Description": "Site 7",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/51/96010_49780abe-47c4-44cc-b5e4-ababc872aa80_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "SMALL TENT",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96002",
            "FacilityID": "251452",
            "CampsiteName": "008",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "HIKE IN",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.771608406363,
            "CampsiteLatitude": 45.1403739400399,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Site Access",
                    "AttributeValue": "Hike-In"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Hike In Distance to Site",
                    "AttributeValue": "475"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "4"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "45"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "1"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "0acd2e99-7943-4f18-8810-7ca6916e2efb",
                    "MediaType": "Image",
                    "EntityID": "96002",
                    "EntityType": "Campsite",
                    "Title": "Site 8",
                    "Subtitle": "",
                    "Description": "Site 8",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/52/96002_baac820d-7387-4ba5-96d1-049387d4358e_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "f9315fcd-6ad4-4fd2-a1b0-e3b0f2e53c42",
                    "MediaType": "Image",
                    "EntityID": "96002",
                    "EntityType": "Campsite",
                    "Title": "Site 8",
                    "Subtitle": "",
                    "Description": "Site 8",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/53/96002_27cd292b-e042-432b-9188-7b8ada7782b9_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "SMALL TENT",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96120",
            "FacilityID": "251452",
            "CampsiteName": "011",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.772518451625,
            "CampsiteLatitude": 45.1429712228392,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "40"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "77425d7c-d0c2-40b0-9ac9-24cf3ce963d6",
                    "MediaType": "Image",
                    "EntityID": "96120",
                    "EntityType": "Campsite",
                    "Title": "Site 11",
                    "Subtitle": "",
                    "Description": "Site 11",
                    "EmbedCode": "",
                    "Height": 526,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/59/96120_a249951e-99e8-4558-af7b-ce28cfbc6ff1_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "82a68a74-4152-4c61-bf93-5ca7e437532c",
                    "MediaType": "Image",
                    "EntityID": "96120",
                    "EntityType": "Campsite",
                    "Title": "Site 11",
                    "Subtitle": "",
                    "Description": "Site 11",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/16/59/96120_2b95ee6f-dbb8-4dc0-8eb7-626508d998ee_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96117",
            "FacilityID": "251452",
            "CampsiteName": "019",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": false,
            "CampsiteLongitude": -121.769991288314,
            "CampsiteLatitude": 45.1450529936117,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "35"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "e761f64e-aafc-419d-8140-b4483ec69164",
                    "MediaType": "Image",
                    "EntityID": "96117",
                    "EntityType": "Campsite",
                    "Title": "Site 19",
                    "Subtitle": "",
                    "Description": "Site 19",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/06/96117_5131b6a1-00bb-4c05-8cef-61a17998aac3_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        },
        {
            "CampsiteID": "96135",
            "FacilityID": "251452",
            "CampsiteName": "015",
            "CampsiteType": "STANDARD NONELECTRIC",
            "TypeOfUse": "Overnight",
            "Loop": "NORTH ARM (TIMOTHY LAKE) CAMPGROUND",
            "CampsiteAccessible": true,
            "CampsiteLongitude": -121.770982236988,
            "CampsiteLatitude": 45.143735110994,
            "CreatedDate": "2015-04-09",
            "LastUpdatedDate": "2020-10-15",
            "ATTRIBUTES": [
                {
                    "AttributeName": "Accessible Occupant Message",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Pets Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Capacity/Size Rating",
                    "AttributeValue": "Single"
                },
                {
                    "AttributeName": "Accessibility",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Picnic Table",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Grills/Fire Ring",
                    "AttributeValue": "Y"
                },
                {
                    "AttributeName": "Campfire Allowed",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Checkout Time",
                    "AttributeValue": "12:00 PM"
                },
                {
                    "AttributeName": "Shade",
                    "AttributeValue": "Yes"
                },
                {
                    "AttributeName": "Max Num of People",
                    "AttributeValue": "6"
                },
                {
                    "AttributeName": "Site Rating",
                    "AttributeValue": "Standard"
                },
                {
                    "AttributeName": "Driveway Surface",
                    "AttributeValue": "Gravel"
                },
                {
                    "AttributeName": "Driveway Entry",
                    "AttributeValue": "Back-In"
                },
                {
                    "AttributeName": "Driveway Grade",
                    "AttributeValue": "Slight"
                },
                {
                    "AttributeName": "Driveway Length",
                    "AttributeValue": "40"
                },
                {
                    "AttributeName": "IS EQUIPMENT MANDATORY",
                    "AttributeValue": "true"
                },
                {
                    "AttributeName": "Checkin Time",
                    "AttributeValue": "4:00 PM"
                },
                {
                    "AttributeName": "Max Num of Vehicles",
                    "AttributeValue": "2"
                }
            ],
            "ENTITYMEDIA": [
                {
                    "EntityMediaID": "f0b4669d-e12e-486a-8018-29bbec233c29",
                    "MediaType": "Image",
                    "EntityID": "96135",
                    "EntityType": "Campsite",
                    "Title": "Site 15",
                    "Subtitle": "",
                    "Description": "Site 15",
                    "EmbedCode": "",
                    "Height": 340,
                    "Width": 1440,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/03/96135_4cbfb126-f60d-4a7e-898e-6da44f80db15_1440.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": true,
                    "IsPreview": false,
                    "IsGallery": false
                },
                {
                    "EntityMediaID": "ef60a304-07a5-4489-8141-0550c27650b9",
                    "MediaType": "Image",
                    "EntityID": "96135",
                    "EntityType": "Campsite",
                    "Title": "Site 15",
                    "Subtitle": "",
                    "Description": "Site 15",
                    "EmbedCode": "",
                    "Height": 525,
                    "Width": 700,
                    "URL": "https://cdn.recreation.gov/public/2019/10/10/17/03/96135_d8498f5a-595d-4eae-a940-f4279934ea19_700.jpg",
                    "Credits": "PGE Parks",
                    "IsPrimary": false,
                    "IsPreview": true,
                    "IsGallery": false
                }
            ],
            "PERMITTEDEQUIPMENT": [
                {
                    "EquipmentName": "Trailer",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "Tent",
                    "MaxLength": 0
                },
                {
                    "EquipmentName": "RV",
                    "MaxLength": 0
                }
            ]
        }
    ],
    "METADATA": {
        "RESULTS": {
            "CURRENT_COUNT": 16,
            "TOTAL_COUNT": 16
        },
        "SEARCH_PARAMETERS": {
            "QUERY": "overnight",
            "LIMIT": 1000,
            "OFFSET": 0
        }
    }
};

module.exports = {
    dummyDataRecAreas,
    dummyDataFacilities,
    dummyDataCampsite
}
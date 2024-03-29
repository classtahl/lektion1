
const fs = require('fs');
var request = require('request');

var headers = {
    'AuthenticationTicket': '5302F76842AA59F999EE6024856E207D077A98508EDEBE8F09BB51C1D8233A4FD5C49F8017100CA9CCC0F2EB3B10E14219F05C4FFA20CE473AD8FC428C1A4FE3DE29E435B9C11C81321CDDE1AF32FF26943C7CA8268822878FA3374008DFA6E9AEAA83F6690C681969FD3C146C4B1436CD9D6089E257899AE39E433CB23B4235B840AC85A5CE8CF7F3D369CA68892188CA9CFDA31D021E6C18C624A84AEB5ADA6C97652FA5D8ED1F592D50DCD445025A2C0071D12A57A76A4E920AC3A7CF433C3D4937674C93CAC19DFC33B7EB9EBAE4DF50B0CE1DD99E23DBB64BB3719117E89260CFE130975F66FDCA0C933FB047A86573B51C9E5E90338C8C6B6A35A1550A0C065A79262AD3298A0C63CD057479BBD46682C9470BFE48E717FC60BF2143E069AB04E4BDCBBF23B33D110803DED460110E92CEADF530B1CF6D742517B707CE17554B54BFF6F15C7ECF0254ACE1DFE96F70193999FF85DEFDD5365F4600938496A122CEA3495A66FE9D9E64CE5D0B6B8274BA491173E700D1EFF5FE1089CA2B7361B034B01AE587A3E7509A3C671A41BAE9761AEA53245BB2CE075AD3394416D284E02D838F780254C7D8F9B16E5B1382E568CC201D771E4F4B40DD136DE2ACECFFC0BE95415E280553B12F7331771E2998D7F05B51DD8151A480C2799B05FA59AA0BF49B1C328F5679A0A64707CBDE5911B9CED9B4EC11DE62D691A4B90DFF05C3660E'
};
var shoppingList = {
    "Id": 17419292,
    "Title": "LISTA",
    "CommentText": "",
    "SortingStore":0,
    "Rows":[
        {
            "RowId": 1,
            "ProductName": "Wrap tortilla",
            "Quantity": 0.000,
            "SourceId": -1,
            "IsStrikedOver": false,
            "InternalOrder": 2,
            "ArticleGroupId": 9,
            "ArticleGroupIdExtended": 9,
            "LatestChange": "2021-01-08T21:42:52Z",
            "OfflineId": "xxxxxx",
            "IsSmartItem": false
          },
          {
            "RowId": 1,
            "ProductName": "Banan",
            "Quantity": 1.000,
            "SourceId": -1,
            "IsStrikedOver": false,
            "InternalOrder": 3,
            "ArticleGroupId": 4,
            "ArticleGroupIdExtended": 4,
            "ProductEan": "",
            "LatestChange": "2021-01-08T21:42:52Z",
            "OfflineId": "xxxxxx",
            "IsSmartItem": false
          }
    ],
    "LatestChange":"2022-02-04T20:52:20Z",
    "OfflineId":"DA62122B-0739-40E0-943D-77B0B870FCDB",
    "IsPrivate":false,
    "IsSmartList":false
}

var options = {
    url: 'https://handla.api.ica.se/api/user/offlineshoppinglists/DA62122B-0739-40E0-943D-77B0B870FCDB/sync',  // Updaterar Inköpslista
    json: true,
    headers: headers,
    body: shoppingList
};

function callback4(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        let data = JSON.stringify(body);
        fs.writeFileSync('./updateshoppinglist.json',data);
    }
}
request(options, callback4);


request.post(options, (err, res, body) => {
    if (err) {
        return console.log("Err" + err);
    }
    console.log(`Status: ${res.statusCode}`);
    console.log(body);
});


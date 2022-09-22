function fromJSONToHTMLTable(json) {
    let arr = JSON.parse(json);

    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));

    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let current = '\t<tr>';
        let keyArray = Object.keys(arr[0]);
        for (let key of keyArray) {
            current += `<th>${escapeHtml(key)}</th>`;
        }
        current += '</tr>';

        return current;
    }

    function makeValueRow(obj) {
        let current = '\t<tr>';
        let valueArray = Object.values(obj);
        for (let value of valueArray) {
            current += `<td>${escapeHtml(value)}</td>`;
        }
        current += '</tr>';

        return current;
    };

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    console.log(outputArr.join('\n'));
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`
);

fromJSONToHTMLTable(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
);
import { Component } from "@angular/core";

@Component({
  selector: "table-basic-example",
  styleUrls: ["table-basic-example.css"],
  templateUrl: "table-basic-example.html"
})
export class TableBasicExample {
  yourData = [
    {
      list: [
        {
          id: "1",
          name: "essen"
        }
      ],
      columns: [
        {
          heading: "Nummer",
          field: "nummer"
        },
        {
          heading: "Beschreibung",
          field: "beschreibung"
        },
        {
          heading: "Frist",
          field: "frist"
        },
        {
          heading: "Gewicht",
          field: "gewicht"
        },
        {
          heading: "Status",
          field: "status"
        },
        {
          heading: "Titel",
          field: "titel"
        }
      ],
      data: [
        {
          nummer: "1",
          beschreibung: "Essen machen",
          frist: "30.6.2020",
          gewicht: "schwer",
          status: "vorraus",
          titel: "Essen"
        }
      ]
    },
    {
      list: [
        {
          id: "2",
          name: "doooood"
        }
      ],
      columns: [
        {
          heading: "Nummer",
          field: "nummer"
        },
        {
          heading: "Beschreibung",
          field: "beschreibung"
        },
        {
          heading: "Frist",
          field: "frist"
        },
        {
          heading: "Gewicht",
          field: "gewicht"
        },
        {
          heading: "Status",
          field: "status"
        },
        {
          heading: "Titel",
          field: "titel"
        }
      ],
      data: [
        {
          nummer: "1",
          beschreibung: "Dummes Zeug",
          frist: "30.6.2020",
          gewicht: "leicht",
          status: "vorraus",
          titel: "Dumm"
        }
      ]
    }
  ];
  listName = [
    {
      list: [
        {
          id: "1",
          name: "essen"
        }
      ]
    },
    {
      list: [
        {
          id: "2",
          name: "doooood"
        }
      ]
    }
  ];
  constructor() { }

  computeData(column, row) {
    var mappedDataRow = [];

    column.forEach(columnElement => {
      mappedDataRow.push(row[columnElement.field]);
    });

    return mappedDataRow;
  }
}

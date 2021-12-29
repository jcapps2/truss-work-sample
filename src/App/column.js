// Specifying each column that will be in the table, and what
// it's accessor is. Also, providing a function to execute on
// each cell in the respective column.
export const tableColumns = () => [
  {
    Header: "Name",
    accessor: "name",
    Cell: props => {
      const { url } = props.row.original;
      return (
        <a href={url} target="_blank">
          {props.value}
        </a>
      );
    }
  },
  {
    Header: "Climate",
    accessor: "climate",
    Cell: props => {
      if (props.value === "unknown") {
        return <span>?</span>;
      }
      return <span>{props.value}</span>;
    }
  },
  {
    Header: "Residents",
    accessor: "residents",
    Cell: props => {
      if (props.value === "unknown") {
        return <span>?</span>;
      }
      return <span>{props.value.length}</span>;
    }
  },
  {
    Header: "Terrain",
    accessor: "terrain",
    Cell: props => {
      if (props.value === "unknown") {
        return <span>?</span>;
      }
      return <span>{props.value}</span>;
    }
  },
  {
    Header: "Population",
    accessor: "population",
    Cell: props => {
      if (props.value === "unknown") {
        return <span>?</span>;
      }
      const formattedNum = new Intl.NumberFormat("fr-FR").format(props.value);
      return <span>{formattedNum}</span>;
    }
  },
  {
    Header: "Surface Water",
    accessor: "surface_water",
    Cell: props => {
      if (props.value === "unknown") {
        return <span>?</span>;
      }
      return <span>{props.value}</span>;
    }
  }
];

import React from "react";
import { color } from "../util/colors";

interface Props {
  numberOfPages: number;
  selectedIndex: number;
  onSelectItem: (item: number) => void;
}

export default (props: Props) => {
  const items = Array.from(Array(props.numberOfPages).keys());

  return (
    <div style={styles.paginationContainer}>
      {items.map((number, index) => {
        const isSelected = props.selectedIndex === index;
        const selectedContainerStyle = {
          ...styles.itemContainer,
          ...styles.selectedItem,
        };

        return (
          <div
            style={isSelected ? selectedContainerStyle : styles.itemContainer}
            onClick={() => props.onSelectItem(index)}
          >
            <label
              style={
                isSelected ? styles.selectedPageIndicator : styles.pageIndicator
              }
            >
              {number}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  paginationContainer: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    flexDirection: "row" as "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  pageIndicator: {
    color: color.primary,
  },
  selectedPageIndicator: {
    color: color.secondary,
  },
  itemContainer: {
    borderColor: color.primary,
    borderWidth: 1,
    borderStyle: "solid",
    padding: "8px",
    margin: "8px 4px 0 4px",
    height: "24px",
    borderRadius: 4,
  },
  selectedItem: {
    backgroundColor: color.primary,
  },
};

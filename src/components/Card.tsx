import React from "react";
import { color } from "../util/colors";

interface Props {
  title?: string;
  items?: {
    [key: string]: string | undefined;
  };
}

export default (props: Props) => {
  return (
    <div style={styles.cardContainer}>
      <h3 style={styles.title}>{props.title || "-"}</h3>
      {!!props.items &&
        Object.entries(props.items).map((item) => {
          return (
            <div style={styles.item}>
              <label>
                <b>{item[0]}: </b>
                <label style={styles.itemInformation}>{item[1] || "-"}</label>
              </label>
            </div>
          );
        })}
    </div>
  );
};

const styles = {
  cardContainer: {
    padding: "16px",
    display: "flex",
    flexDirection: "column" as "column",
    flex: 1,
    borderRadius: "8px",
    borderColor: color.primary,
    borderWidth: 2,
    borderStyle: "solid",
  },
  title: {
    color: color.primary,
    alignSelf: "center",
  },
  itemInformation: {
    color: color.secondary,
  },
  item: {
    marginTop: "4px",
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    textAlign: "start" as "start",
    overflowWrap: "break-word" as "break-word",
  },
};

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { data } from "./constants/jsonData";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400
  }
});

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <>
      {data.map(item => {
        return (
          <TreeView
            key={item.id}
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="1" label={item.name}>
              <TreeItem nodeId="2" label={item.code} />
              <TreeItem nodeId="3" label={item.createdAt} />
              <TreeItem nodeId="4" label={item.productCategoryId} />
              {item.productCategoryIds.map(el => {
                return (
                  <>
                    <TreeItem nodeId="5" label={el.name}>
                      <TreeItem nodeId="6" label={el.code} />
                      <TreeItem nodeId="7" label={el.createdAt} />
                    </TreeItem>
                  </>
                );
              })}
            </TreeItem>
          </TreeView>
        );
      })}
    </>
  );
}

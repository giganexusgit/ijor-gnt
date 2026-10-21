import { List, ListItem, Typography } from "@mui/material";
import React from "react";

const BoardMembers = () => {
  return (
    <>
      <List>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Chief Patrons
          </Typography>
          <Typography align="center">
            Dr. Akhtar Hasan Rizvi: President, Rizvi Education Society
          </Typography>
          <Typography align="center">
            Adv. (Mrs.) Rubina A. H. Rizvi: Director, Rizvi Education Society
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Editor-in-Chief
          </Typography>
          <Typography align="center">
            {/* Dr. Ashfaq Ahmad Khan: Principal, Rizvi College of Arts, Science
            &amp; Commerce, Bandra (West), Mumbai - 400050. */}
            Dr. (Mrs.) Anjum Ara M. K. Ahmad : Incharge Principal & Professor,
            <br />
            Rizvi College of Arts, Science & Commerce, Bandra (West), Mumbai 400050
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Executive Editor
          </Typography>
          <Typography align="center">
            Dr. Rana Ansariya: Associate Professor & Head, Department of Zoology,
            <br /> Rizvi College of Arts, Science & Commerce, Mumbai 400050
            <br />
            Email: executiveeditor.ijr@rizvicollege.edu.in
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Members
          </Typography>
          <Typography align="center">
            Mrs. Shweta Dubey
            <br />
            {/* Dr. Masooma Sayed */}
            Mr. Subhash Gupta
            <br />
            {/* Ms. Aiman Peerzade */}
            Ms. Mehvash Shaikh
            <br />
            Mr. Prabhat Singh
            <br />
            Ms. Tabassum Shaikh
            <br />
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Technical Support
          </Typography>
          <Typography align="center">Mr. Masoom Ali</Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Administrative Support
          </Typography>
          <Typography align="center">Mr. Akshay N</Typography>
        </ListItem>
      </List>
    </>
  );
};

export default BoardMembers;

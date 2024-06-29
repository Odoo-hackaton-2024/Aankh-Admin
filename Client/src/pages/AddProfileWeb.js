import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./AddProfileWeb.module.css";

const AddProfileWeb = () => {
  const navigate = useNavigate();

  const onDashboardButtonClick = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

  const onEllipseIcon2Click = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

  const onTrackNowButtonClick = useCallback(() => {
    // Please sync "tracknow-web" to the project
  }, []);

  const onOfficerAnalysisButtonClick = useCallback(() => {
    navigate("/officer-analysisweb");
  }, [navigate]);

  const onEmerCheckButtonClick = useCallback(() => {
    navigate("/emercheckweb");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/submitted-web");
  }, [navigate]);

  const onADDTextClick = useCallback(() => {
    navigate("/submitted-web");
  }, [navigate]);

  return (
    <div className={styles.addProfileWebDiv}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.icons8Analytics301}
        alt=""
        src="../icons8analytics30-1@2x.png"
      />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <Button
        className={styles.dashboardButton}
        sx={{ width: 119 }}
        variant="text"
        color="secondary"
        href="/homedashboardweb"
        onClick={onDashboardButtonClick}
      >
        Dashboard
      </Button>
      <img
        className={styles.icons8DashboardLayout481}
        alt=""
        src="../icons8dashboardlayout48-1@2x.png"
      />
      <div className={styles.groupDiv}>
        <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-3.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-4.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-6.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-5.svg" />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-7.svg" />
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-8.svg"
        onClick={onEllipseIcon2Click}
      />
      <img className={styles.groupIcon} alt="" src="../group-14.svg" />
      <Button
        className={styles.trackNowButton}
        sx={{ width: 134 }}
        variant="text"
        color="secondary"
        href="/tracknowweb"
        onClick={onTrackNowButtonClick}
      >
        Track now
      </Button>
      <img
        className={styles.icons8Dashboard481}
        alt=""
        src="../icons8dashboard48-1@2x.png"
      />
      <Button
        className={styles.officerAnalysisButton}
        sx={{ width: 157 }}
        variant="text"
        color="secondary"
        href="/officer-analysisweb"
        onClick={onOfficerAnalysisButtonClick}
      >
        Officer Analysis
      </Button>
      <Button
        className={styles.emerCheckButton}
        sx={{ width: 129 }}
        variant="text"
        color="secondary"
        href="/emercheckweb"
        onClick={onEmerCheckButtonClick}
      >
        Emer-Check
      </Button>
      <img
        className={styles.icons8CheckpointGoalFlagFo}
        alt=""
        src="../icons8checkpointgoalflagforprogressandopportunity24-1@2x.png"
      />
      <div className={styles.addProfileDiv}>Add Profile</div>
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img className={styles.groupIcon1} alt="" src="../group.svg" />
      <div className={styles.groupDiv1}>
        <div className={styles.groupDiv2}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-34.svg"
          />
          <img className={styles.lineIcon} alt="" src="../line-11.svg" />
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv4} />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.addProfileDiv1}>Add Profile</div>
        </div>
        <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
      </div>
      <div className={styles.groupDiv5}>
        <div className={styles.firstNameDiv}>First name</div>
        <div className={styles.addCheckpointsDiv}>Add Checkpoints</div>
        <div className={styles.lastNameDiv}>Last name</div>
        <div className={styles.iDNumberDiv}>ID Number</div>
        <div className={styles.beatLocationDiv}>Beat location</div>
        <div className={styles.checkpoint1Div}>Checkpoint 1</div>
        {/* <div className={styles.checkpoint1Div}>Checkpoint 1</div> */}
        <div className={styles.checkpoint2Div}>Checkpoint 2</div>
        <div className={styles.uploadPhotoDiv}>Upload photo</div>
        <TextField
          className={styles.rectangleTextField}
          sx={{ width: 325 }}
          color="secondary"
          variant="filled"
          type="text"
          size="medium"
          margin="none"
        />
        <div className={styles.rectangleDiv6} />
        <TextField
          className={styles.rectangleTextField1}
          sx={{ width: 325 }}
          color="secondary"
          variant="filled"
          type="text"
          size="medium"
          margin="none"
        />
        <TextField
          className={styles.rectangleTextField2}
          sx={{ width: 325 }}
          color="secondary"
          variant="filled"
          type="text"
          size="medium"
          margin="none"
        />
        <TextField
          className={styles.rectangleTextField3}
          sx={{ width: 325 }}
          color="secondary"
          variant="filled"
          type="text"
          size="medium"
          margin="none"
        />
        <TextField
          className={styles.rectangleTextField4}
          sx={{ width: 325 }}
          color="secondary"
          variant="filled"
          type="text"
          size="medium"
          margin="none"
        />
        <input className={styles.rectangleInput} type="file" />
        <TextField
          className={styles.rectangleTextField5}
          sx={{ width: 325 }}
          color="secondary"
          variant="filled"
          type="text"
          size="medium"
          margin="none"
        />
      </div>
      <img
        className={styles.mapsicleMapIcon}
        alt=""
        src="../mapsicle-map@2x.png"
      />
      <div className={styles.groupDiv6}>
        <div className={styles.rectangleDiv7} />
        <img
          className={styles.icons8PlusMath241}
          alt=""
          src="../icons8plusmath24-1@2x.png"
        />
        <img
          className={styles.icons8Minus241}
          alt=""
          src="../icons8minus24-1@2x.png"
        />
      </div>
      <div className={styles.rectangleDiv8} />
      {/* <div className={styles.addCheckpointDiv}>Add checkpoint</div> */}
      {/* <img
        className={styles.placeholder1Icon}
        alt=""
        src="../placeholder-1@2x.png"
      /> */}
      <img
        className={styles.rectangleIcon1}
        alt=""
        src="../rectangle-33@2x.png"
      />
      <Button
        className={styles.groupButton}
        sx={{ width: 66 }}
        variant="contained"
        color="secondary"
      >
        Upload
      </Button>
      <div className={styles.groupDiv7}>
        <Button
          className={styles.rectangleButton}
          sx={{ width: 114 }}
          variant="contained"
          color="secondary"
        >
          Add more+
        </Button>
        <Button
          className={styles.rectangleButton1}
          sx={{ width: 185 }}
          variant="contained"
          color="secondary"
          size="large"
          onClick={onRectangleButton1Click}
        >
          ADD
        </Button>
        <div className={styles.rectangleDiv9} />
      </div>
    </div>
  );
};

export default AddProfileWeb;

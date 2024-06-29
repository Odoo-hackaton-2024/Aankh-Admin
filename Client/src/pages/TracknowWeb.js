import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./TracknowWeb.module.css";

const TracknowWeb = () => {
  const navigate = useNavigate();

  const onDashboardButtonClick = useCallback(() => {
    navigate("/homedashboardweb");
  }, [navigate]);

  const onEllipseIcon2Click = useCallback(() => {
    navigate("/homedashboardweb");
  }, [navigate]);

  const onOfficerAnalysisButtonClick = useCallback(() => {
    navigate("/officer-analysisweb");
  }, [navigate]);

  const onEmerCheckButtonClick = useCallback(() => {
    navigate("/emercheckweb");
  }, [navigate]);

  const onAddProfileButtonClick = useCallback(() => {
    navigate("/add-profileweb");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/tracknowweb1");
  }, [navigate]);

  return (
    <div className={styles.tracknowWebDiv}>
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
        <img className={styles.polygonIcon} alt="" src="../polygon-12.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-12.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-32.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-42.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-62.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-52.svg" />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-72.svg" />
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-81.svg"
        onClick={onEllipseIcon2Click}
      />
      <img className={styles.groupIcon} alt="" src="../group-142.svg" />
      <div className={styles.trackNowDiv}>Track now</div>
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
        sx={{ width: 131 }}
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
      <Button
        className={styles.addProfileButton}
        sx={{ width: 112 }}
        variant="text"
        color="secondary"
        href="/add-profileweb"
        onClick={onAddProfileButtonClick}
      >
        Add Profile
      </Button>
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img className={styles.groupIcon1} alt="" src="../group2.svg" />
      <div className={styles.groupDiv1}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-341.svg"
        />
        <img className={styles.lineIcon} alt="" src="../line-115.svg" />
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv4} />
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv5} />
        </div>
        <div className={styles.trackNowDiv1}>Track Now</div>
      </div>
      <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
      <div className={styles.fullNameDiv}>Full Name</div>
      <div className={styles.iDNumberDiv}>ID Number</div>
      <TextField
        className={styles.rectangleTextField}
        sx={{ width: 325 }}
        color="secondary"
        variant="filled"
        type="text"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.rectangleTextField1}
        sx={{ width: 325 }}
        color="secondary"
        variant="filled"
        type="text"
        size="medium"
        margin="none"
      />
      <Button
        className={styles.groupButton}
        sx={{ width: 262 }}
        variant="contained"
        color="secondary"
        href="/tracknowweb1"
        onClick={onGroupButtonClick}
      >
        Track
      </Button>
      <div className={styles.rectangleDiv6} />
    </div>
  );
};

export default TracknowWeb;

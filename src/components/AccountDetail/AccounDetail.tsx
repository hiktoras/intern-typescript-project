import styles from "./AccountDetail.module.css";
import ProgressImg from "../../assets/images/progress.png";
import Alesia from "../../assets/images/alesia-details.jpg";
import SettingCard from "../SettingCard/SettingCard";

export interface AccountDetailProps { }
const AccountDetail = ({ }: AccountDetailProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.settingNav}>
        <div className={styles.profileCompleteBox}>
          <div className={styles.profileCompleteRow}>
            <img className={styles.progress} src={ProgressImg} alt="usd" />
            <div>
            <p className={styles.profileCompleteTitle}>Complete profile</p>
            <p className={styles.profileCompleteText}>
              Complete your profile to unlock all features
              </p>
            </div>

          </div>
          <div >
            <button className={styles.verifyButton}>Verify identity</button>
          </div>
        </div>
        <SettingCard
          iconName={"account"}
          name={"Personal Informations"}
          description={"View your detail to receiving money"}
          isSelected={false}
        />
        <SettingCard
          iconName={"payment"}
          name={"Direct Debits"}
          description={"Set up and manage your direct debit"}
          isSelected={false}
        />
        <SettingCard
          iconName={"calendar"}
          name={"Scheduled Transfer"}
          description={"Manage transfers that are due to go out"}
          isSelected={false}
        />
        <SettingCard
          iconName={"shield"}
          name={"Login and Security"}
          description={"Amet, est purus a loborits sit."}
          isSelected={false}
        />
        <SettingCard
          iconName={"lock"}
          name={"Data Privacy"}
          description={"Amet, est purus a loborits sit."}
          isSelected={false}
        />
      </div>
      <div className={styles.settingEdit}>
        <p className={styles.businessInfoTitle}>Personal Information</p>

        <div className={styles.alesiaInfo}>
          <img src={Alesia} alt="alesia" />
          <button className={styles.uploadButton}>Upload New Pictures</button>
          <button className={styles.deleteButton}> Delete</button>
        </div>
        <div className={styles.formRow}>
          <div>
            <p className={styles.boxText}>Full legal first name</p>
            <div className={styles.inputBox}>
              <input className={styles.input} value="Alesia" />
            </div>
          </div>
          <div>
            <p className={styles.boxText}>Full legal first name</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>Karapova</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div>
            <p className={styles.boxText}>Date of birth</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>29th March 1996</option>
              </select>
            </div>
          </div>
          <div>
            <p className={styles.boxText}>Phone number</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>+1 2345 2980 777</option>
              </select>
            </div>
          </div>
        </div>
        <p className={styles.businessInfoSubTitle}>Personal Address</p>
        <div className={styles.formRow}></div>
        <div className={styles.formRow}>
          <div>
            <p className={styles.boxText}>Country</p>
            <div className={styles.inputBox}>
              <input className={styles.input} value="United States" />
            </div>
          </div>
          <div>
            <p className={styles.boxText}>City</p>
            <div className={styles.inputBox}>
              <input className={styles.input} value="California" />
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div>
            <p className={styles.boxText}>Address</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>6391 Elgin St. Celina, Delaware 10299</option>
              </select>
            </div>
          </div>
          <div>
            <p className={styles.boxText}>Postal Code</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>23467</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;

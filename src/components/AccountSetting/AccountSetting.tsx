import styles from "./AccountSetting.module.css";
import SettingCard from "../SettingCard/SettingCard";

export interface AccountSettingProps {}
const AccountSetting = ({}: AccountSettingProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.settingNav}>
        <p className={styles.navTitle}>Business Profile</p>
        <SettingCard
          iconName={"business-info"}
          name={"Bussines Information"}
          description={"Set up and manage your business"}
          isSelected={false}
        />
        <SettingCard
          iconName={"money-bank"}
          name={"Money, Banks, and Card"}
          description={"Gravida gravida nisi, magna blandit"}
          isSelected={false}
        />
        <SettingCard
          iconName={"notification"}
          name={"Notifications"}
          description={"Manage notifications"}
          isSelected={false}
        />
        <p className={styles.navTitle}>ACCOUNT AND SERVICES</p>
        <SettingCard
          iconName={"account"}
          name={"Account Access"}
          description={"Set up and manage your business"}
          isSelected={false}
        />
        <SettingCard
          iconName={"payment"}
          name={"Payment Preference"}
          description={"Gravida gravida nisi, magna blandit"}
          isSelected={false}
        />
        <SettingCard
          iconName={"auto-conversion"}
          name={"Auto Conversions"}
          description={"Gravida gravida nisi, magna blandit"}
          isSelected={false}
        />

        <SettingCard
          iconName={"statement"}
          name={"Statement and Reports"}
          description={"Gravida gravida nisi, magna blandit"}
          isSelected={false}
        />
      </div>
      <div className={styles.settingEdit}>
        <p className={styles.businessInfoTitle}>Business Information</p>
        <p className={styles.businessInfoSubTitle}>Business Details</p>
        <div className={styles.formRow}>
          <div>
            <p className={styles.boxText}>Business Name</p>
            <div className={styles.inputBox}>
              <input className={styles.input} value="Iconic Agency" />
            </div>
          </div>
          <div>
            <p className={styles.boxText}>Industry</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>Technology</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div>
            <p className={styles.boxText}>Timezone</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>PT, Pacific Time, UTC -8:00</option>
              </select>
            </div>
          </div>
          <div>
            <p className={styles.boxText}>Default Currency</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>USD</option>
              </select>
            </div>
          </div>
        </div>
        <p className={styles.businessInfoSubTitle}>Business Address</p>
        <div className={styles.formRow}>
          <div>
            <p className={styles.boxText}>Legal name of company</p>
            <div className={styles.inputBox}>
              <input
                className={styles.longInput}
                value="Iconic Nice Agency LTD"
              />
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div>
            <p className={styles.boxText}>Apartment, suite, or etc.</p>
            <div className={styles.inputBox}>
              <input className={styles.input} value="Greenlake" />
            </div>
          </div>
          <div>
            <p className={styles.boxText}>Address</p>
            <div className={styles.inputBox}>
              <input
                className={styles.input}
                value="4517 Washington Ave. Manchester"
              />
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div>
            <p className={styles.boxText}>City</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>Washington</option>
              </select>
            </div>
          </div>
          <div>
            <p className={styles.boxText}>Country of Region</p>
            <div className={styles.inputBox}>
              <select className={styles.input}>
                <option>United States</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;

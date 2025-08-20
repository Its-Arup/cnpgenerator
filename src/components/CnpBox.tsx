import React, { useState } from "react";

const CnpBox = () => {
  const [sex, setSex] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [serialCode, setSerialCode] = useState<string>("321");
  const [cnp, setCnp] = useState<string>("1751216418905");

  const handleGenerateCnp = () => {
    // Example of CNP generation logic
    setCnp("1751216418905");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.cnp as React.CSSProperties}>{cnp}</h2>

      <div style={styles.inputGroup}>
        <label htmlFor="sex" className="font-primary text-[0.875rem]">
          Sex: <span className="text-red-500">*</span>
        </label>
        <select
          id="sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          style={styles.input}
        >
          <option value="Masculin">Masculin</option>
          <option value="Feminin">Feminin</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="birthDate" className="font-primary text-[0.875rem]">
          Data nașterii:
        </label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="country" className="font-primary text-[0.875rem]">
          Țara nașterii: <span className="text-red-500">*</span>
        </label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={styles.input}
        >
          <option value="România">România</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="county" className="font-primary text-[0.875rem]">
          Județul nașterii: <span className="text-red-500">*</span>
        </label>
        <select
          id="county"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          style={styles.input}
        >
          <option value="Satu Mare">Satu Mare</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="serialCode" className="font-primary text-[0.875rem]">
          Cod serial: <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-2 p-2.5 border-[#ddd] border rounded-[5px]">
            <p className="font-primary pl-2">#</p>
          <input
            type="text"
            id="serialCode"
            value={serialCode}
            onChange={(e) => setSerialCode(e.target.value)}
            className="w-full outline-none"
          />
        </div>
      </div>

      <button onClick={handleGenerateCnp} style={styles.button}>
        Genereaza CNP
      </button>
      <h2 style={styles.cnp as React.CSSProperties} className="pt-4">
        {cnp}
      </h2>
    </div>
  );
};

const styles = {
  container: {
    // flex: 1,
    padding: "20px",
    paddingBottom: "0px",
    maxWidth: "588px",
    width: "100%",
    margin: "0 auto",
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  cnp: {
    textAlign: "center",
    fontSize: "24px",
    color: "#2F55D4",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginTop: "5px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2F55D4",
    color: "white",
    border: "none",
    borderRadius: "50px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default CnpBox;

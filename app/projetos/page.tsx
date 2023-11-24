import React from "react";
import background from "../assets/background.svg";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.containerBg}>
      <div className="flex items-center justify-center h-full w-full">
        <p>
          Projetos
        </p>
      </div>
    </div>
  );
}
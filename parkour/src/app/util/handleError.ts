export function handleError(error: string) {
    const dangerAlert = document.getElementById("danger-alert") as HTMLDivElement | "";
    if (dangerAlert) {
    // remove hidden from alert
    dangerAlert.classList.remove("hidden");
    const alertText = document.getElementById("alert-text") as HTMLDivElement | "";
    if (alertText) {
        alertText.innerHTML = error;
    } else {
        console.log("Alert text not found.");
    }

    } else {
    console.log("Alert not found.");
    }
}
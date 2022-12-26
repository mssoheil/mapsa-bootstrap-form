window.onload = () => {
  const toastTrigger = document.getElementById("liveToastBtn");
  console.log("DEBUG -> toastTrigger", toastTrigger);
  const toastContent = document.querySelector("#liveToast");
  console.log("DEBUG -> toastContent", toastContent);
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastContent);
    toast.show();
    setTimeout(() => {
      toast.hide();
    }, 4000);
  });
};

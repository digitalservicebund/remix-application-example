export const requestFeedback = function () {
  const fakeFeedbackWidgetTarget = document.createElement("button");
  fakeFeedbackWidgetTarget.dataset.context = JSON.stringify({
    portalId: "demofeedback",
    instrumentId: "assist-service",
  });
  fakeFeedbackWidgetTarget.dataset.theme = JSON.stringify({
    textColor: "#000",
    textBackgroundColor: "#fff",
    headlineColor: "#000",
    error: "#f00",
    textfieldColor: "#000",
    textfieldBackgroundColor: "#fff",
    footerTextColor: "#000",
    footerBackgroundColor: "#fff",
    buttonPrimaryColor: "#fff",
    buttonPrimaryBackgroundColor: "#004b76",
  });
  window.bmi115WidgetButton.init(fakeFeedbackWidgetTarget);
};

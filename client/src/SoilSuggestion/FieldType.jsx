
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SoilPHSlider from "./SoilPHSlider";
import SoilFertility from "./SoilFertility";
import WeatherInput from "./WeatherInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
function handleInvalidInput() {
  toast.error("Invalid input! Please try again.");
}

function handleSuccess() {
  toast.success("Success! Your data has been saved.");
}

const steps = ["Soil Type", "Soil Fertility", "Weather Conditions"];

export default function FieldType() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    soilType: 7,
    soilFertility: null,
    WeatherConditions: {
      Rainfall: null,
      Temperature: null,
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();
  const handleSubmit = async() => {
    try {
      console.log(formData);
      navigate("/cropsuggest", { state: formData });
      handleSuccess();
    } catch {
      handleInvalidInput();
    }
  };



  const onChange = (val) => {
    setFormData((prev) => ({ ...prev, soilType: val }));
  };

  const onSelect = (val) => {
    setFormData((prev) => ({ ...prev, soilFertility: val }));
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleStep = (step) => () => setActiveStep(step);

  const handleComplete = () => {
    setCompleted({ ...completed, [activeStep]: true });
    handleNext();
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#121212",
        color: "#fff",
        p: 2,
      }}
    >
      {/* Stepper */}
      <Stepper nonLinear activeStep={activeStep} sx={{ mb: 3 }}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      {/* Main Content Area */}
      <Box
        sx={{
          position: "relative",
          flexGrow: 1,
          overflowY: "auto",
          bgcolor: "#1e1e1e",
          borderRadius: 2,
          p: 3,
          mb: 2,
          boxShadow: 3,
          background: `url("/images/istockphoto-2151736273-612x612.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          imageRendering: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("/images/istockphoto-2151736273-612x612.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)",
            borderRadius: 2,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          {allStepsCompleted() ? (
            <Typography sx={{ textAlign: "center", mt: 2 }}>
              Redirecting to crop suggestions...
            </Typography>
          ) : (
            <Box
              sx={{
                mb: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {activeStep === 0 && (
                <SoilPHSlider onChange={onChange} phValue={formData.soilType} />
              )}
              {activeStep === 1 && (
                <SoilFertility
                  onSelect={onSelect}
                  selected={formData.soilFertility}
                />
              )}
              {activeStep === 2 && (
                <>
                  <Typography variant="h6" color="black" gutterBottom>
                    Weather Conditions
                  </Typography>
                  <WeatherInput
                    weather={formData.WeatherConditions}
                    onChange={(updatedWeather) =>
                      setFormData((prev) => ({
                        ...prev,
                        WeatherConditions: updatedWeather,
                      }))
                    }
                  />
                </>
              )}
            </Box>
          )}
        </Box>
      </Box>

      {/* Navigation Buttons */}
      {!allStepsCompleted() && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>

          <Box sx={{ flexGrow: 1 }} />

          <Button onClick={handleNext} sx={{ mr: 1 }}>
            Next
          </Button>

          {completed[activeStep] ? (
            <Typography variant="caption" sx={{ display: "inline-block" }}>
              Step {activeStep + 1} already completed
            </Typography>
          ) : (
            <>
              {completedSteps() === totalSteps() - 1 ? (
                <Button
                  variant="contained"
                  onClick={() => {
                    handleComplete();
                    handleSubmit(); // Triggers useEffect to navigate
                  }}
                >
                  Finish
                </Button>
              ) : (
                <Button variant="contained" onClick={handleComplete}>
                  Complete Step
                </Button>
              )}
            </>
          )}
        </Box>
      )}
    </Box>
  );
}

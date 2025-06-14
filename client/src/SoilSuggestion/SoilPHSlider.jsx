import { Box, Slider, Typography, Paper } from "@mui/material";

const marks = [
  { value: 1, label: "1" },
  { value: 3, label: "3" },
  { value: 7, label: "7" },
  { value: 11, label: "11" },
  { value: 14, label: "14" },
];

// Function to get color for pH value based on typical pH test colors
const getPHColor = (value) => {
  if (value < 4) return "#d32f2f"; // Deep red for strong acid
  if (value < 6) return "#f44336"; // Red
  if (value < 7) return "#ff7043"; // Orange-ish (slightly acidic)
  if (value === 7) return "#4caf50"; // Green (neutral)
  if (value <= 9) return "#64b5f6"; // Light blue (mild base)
  if (value <= 11) return "#1976d2"; // Blue (basic)
  return "#512da8"; // Deep purple (strong base)
};

export default function SoilPHSlider({onChange,phValue}) {

  return (
    <>
        <Typography variant="h5" color="black" gutterBottom>Soil Type</Typography>
        <Paper
        elevation={3}
        sx={{ p: 3, borderRadius: 3, backgroundColor: "#121212", width: 500,height:400,display:"flex",flexDirection:"column"}}
        >
        <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#fff", textAlign: "center" }}
        >
            Soil pH Level
        </Typography>

        {/* Colored circle representing pH */}
        <Box
            sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: getPHColor(phValue),
            margin: "0 auto",
            mb: 2,
            border: "3px solid #fff",
            boxShadow: `0 0 15px ${getPHColor(phValue)}`,
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        />

        <Typography
            sx={{ color: getPHColor(phValue), textAlign: "center", mb: 1 }}
        >
            pH: {phValue} —{" "}
            {phValue < 7 ? "Acidic" : phValue === 7 ? "Neutral" : "Basic"}
        </Typography>

        <Slider
            value={phValue}
            onChange={(e,val) =>{
                onChange && onChange(val);
                }}
            step={1}
            min={1}
            max={14}
            marks={marks}
            valueLabelDisplay="on"
            sx={{
            color: getPHColor(phValue),
            height: 6,
            "& .MuiSlider-thumb": {
                height: 20,
                width: 20,
                backgroundColor: "#fff",
                border: "2px solid currentColor",
                "&:focus, &:hover, &.Mui-active": {
                boxShadow: "0 0 0 8px rgba(0, 0, 0, 0.16)",
                },
            },
            "& .MuiSlider-track": {
                border: "none",
            },
            "& .MuiSlider-rail": {
                opacity: 0.3,
                backgroundColor: "#888",
            },
            }}
        />
        </Paper>
    </>
  );
}

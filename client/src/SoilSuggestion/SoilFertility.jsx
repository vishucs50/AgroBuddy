
import { Box, Typography } from "@mui/material";

const options = [
  { id: 1, label: "High Fertility", color: "#4caf50" },
  { id: 2, label: "Medium Fertility", color: "#ff9800" },
  { id: 3, label: "Low Fertility", color: "#f44336" },
];

export default function SoilFertility({
  title = "Soil Fertility",
  onSelect,
  selected
}) {

  const handleSelect = (option) => {
    if (onSelect) onSelect(option.label);
  };

  return (
    <>
      <Typography variant="h5" color="black" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ display: "flex", gap: 5 }}>
        {options.map((option) => (
          <Box
            key={option.id}
            onClick={() => handleSelect(option)}
            sx={{
              height: 480,
              width: 300,
              backgroundColor: option.color,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow:
                selected === option.label ? "0 0 20px #fff" : "0 0 10px #00000055",
              transform: selected === option.label  ? "scale(1.05)" : "scale(1)",
            }}
          >
            <Typography variant="h6" color="#fff">
              {option.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

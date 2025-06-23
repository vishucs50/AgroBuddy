import { Box, Typography } from "@mui/material";

const options = [
  { id: 1, label: "High Fertility", color: "#4caf50" },
  { id: 2, label: "Medium Fertility", color: "#ff9800" },
  { id: 3, label: "Low Fertility", color: "#f44336" },
];

export default function SoilFertility({
  title = "Soil Fertility",
  onSelect,
  selected,
}) {
  const handleSelect = (option) => {
    if (onSelect) onSelect(option.label);
  };

  return (
    <>
      <Typography
        variant="h5"
        color="black"
        gutterBottom
        sx={{ textAlign: "center", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 2, sm: 4, md: 5 },
          mt: 2,
        }}
      >
        {options.map((option) => (
          <Box
            key={option.id}
            onClick={() => handleSelect(option)}
            sx={{
              height: { xs: 180, sm: 240, md: 300 },
              width: { xs: 140, sm: 200, md: 250 },
              backgroundColor: option.color,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow:
                selected === option.label
                  ? "0 0 20px #fff"
                  : "0 0 10px #00000055",
              transform: selected === option.label ? "scale(1.05)" : "scale(1)",
            }}
          >
            <Typography
              variant="h6"
              color="#fff"
              sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem" } }}
            >
              {option.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

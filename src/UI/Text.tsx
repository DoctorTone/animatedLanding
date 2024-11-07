import { Padding } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Text = () => {
  return (
    <div id="text" className="panel">
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ mb: 5 }}>
          Your Company
        </Typography>
        <Typography
          variant="h5"
          sx={{
            border: "2px solid white",
            borderRadius: "20px",
            padding: "10px 20px",
          }}
        >
          Shed some light on your next project
        </Typography>
      </Box>
    </div>
  );
};

export default Text;

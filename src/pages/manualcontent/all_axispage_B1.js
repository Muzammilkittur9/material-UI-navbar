// X_axispage_B1
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// import SelectionButton from '../../component/selectionbutton';
import React,{useState} from 'react';


function App() {
  const [maxTorque, setMaxTorque] = useState('');

  const handleMaxTorqueChange = (event) => {
    setMaxTorque(event.target.value);
  };

  return (
    <div className="App">
       {/* for STATUS */}
       <div className="column" style={{ textAlign: "center" }}>
        <h2>Status</h2>
          <Stack direction="row" paddingTop={2} spacing={2}>
            <Button variant="contained" color="success">Enable</Button>
            <Button variant="contained" color="success">At Home</Button>
            <Button variant="contained" color="error">Faults</Button>  
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={2}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
            />

            <TextField
              variant="outlined"
              label="Actual Position"
              size="small" 
              defaultValue="NaN"
              style={{ width: 140 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
            />  
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={2}>
            <TextField
              variant="outlined"
              label="Actual Current"
              size="small" // Set custom size as per your requirement
              defaultValue="NaN"
              style={{ width: 145 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">A</InputAdornment>,
              }}
            />

            <TextField
              variant="outlined"
              label="Actual Torque"
              size="small" // Set custom size as per your requirement
              defaultValue="NaN"
              style={{ width: 145 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
              }}
            />  
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={2}>
          <TextField type="number" size='small' id="outlined-basic" label="Enter Max Torque" variant="outlined" style={{ width: 310 }} value={maxTorque} 
          onChange={handleMaxTorqueChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          </Stack>
          

          <Stack direction="row" paddingTop={1.5} spacing={2.9}>
            <Button variant="contained" color="inherit">Enable</Button>
            <Button variant="contained" color="inherit">Disable</Button>
            <Button variant="contained" color="inherit">Reset</Button>
            </Stack>
        </div>
      
      
      {/* for MOVE */}
      <div className="column" style={{ textAlign: "center"}}>
        <h2>Move</h2>
          <Stack direction="column" paddingTop={2} spacing={2}>
          <TextField
              variant="outlined"
              label="Move Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
            />

            <TextField
              variant="outlined"
              label="Move Acceleration"
              size="small" 
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />  
            
          <TextField
              variant="outlined"
              label="Move Deceleration"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Stack>
        </div>
    </div>
  );
}

export default App;
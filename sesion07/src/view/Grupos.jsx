import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {Fab, TextFiel, TextField, NativeSelect } from "@material-ui/core";
import AddIcon from "@material-ui/icons";
import PersonIcon from '@material-ui/icons/Person';
import { Container, 
    Button, 
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";


import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(2),
      },
    },
    input: {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '20px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

  
class Grupos extends Component {
  
    state = {  }
    frmGrpClave= React.createRef();
    frmGrpCarrera = React.createRef();
    frmActClave = React.createRef();
    frmInsClave = React.createRef();
    frnActNombre = React.createRef();
    frnInsNombre = React.createRef();
    frnGrpAula= React.createRef();
    frnGrpLimite= React.createRef();
    frnGrpDateIni= React.createRef();
    frnGrpDateFin= React.createRef();
    

    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

      AddGrupo = event =>
    {
        this.catologos.push(this.frnNombre.value);
    }


    render() {
        return(
            <div className = "App-content">
               <Link to="/">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />}
                    >
                    Regresar
                    </Button>
                    
                </Link>
                <h4> GRUPOS </h4>
                <div className = "App-catalogo">
                <form autoComplete="off" onSubmit={this.AddGrupo}>
                <Button
                            variant="contained"
                            color="default"
                            size="small"
                        >
                        Registro
                </Button> 
                &nbsp;&nbsp;
                <Button
                            variant="contained"
                            color="default"
                            size="small"
                        >
                        Modificar
                </Button>
                &nbsp;&nbsp; 
                <br></br>
 
                <TextField
                        id="TF1"
                        label = "Clave Grupo: "
                        type = "text"
                        margin= "normal"
                        variant="outlined"
                        inputRef={i => (this.frmGrpClave_Grpo)}
                    />   
                    &nbsp;&nbsp;
                <FormControl margin="1">
                    <InputLabel htmlFor="demo-customized-select-native">Carrera</InputLabel>
                        <NativeSelect
                        id="demo-customized-select-native"
                        value={this.state.value}
                        onChange={this.handleChange}
                        inputRef ={e=>(this.frnCategoria=e)}
                        input={<BootstrapInput />}
                        >
                        <option value={1}>Ingeniería Informática</option>
                        <option value={2}>Ingeniería en Sistemas</option>
                        <option value={3}>Ingeniería Bioquímica</option>
                        <option value={4}>Ingeniería Industrial</option>
                        <option value={5}>Ingenieríe en Gestión</option>
                        <option value={6}>Lic. en Administración</option>
                        <option value={7}>Contador Público</option>
                        </NativeSelect>
                </FormControl>
                &nbsp;&nbsp;
                <TextField
                        id="TF1"
                        label = "Clave Actividad: "
                        type = "text"
                        margin= "normal"
                        variant="outlined"
                        inputRef={i => (this.frmActClave)}
                    />
                &nbsp;&nbsp;
                <TextField
                    label = "Actividad: "
                    type = "text"
                    margin= "normal"
                    variant="outlined"
                    inputRef={i => (this.frnActNombre)}
                />
                <br></br>
                <TextField
                    label = "Clave Instructor: "
                    type = "text"
                    margin= "normal"
                    variant="outlined"
                    inputRef={i => (this.frmInsClave)}
                />
                &nbsp;&nbsp;
                <TextField
                    label = "Nombre del Instructor: "
                    type = "text"
                    margin= "normal"
                    variant="outlined"
                    inputRef={i => (this.frnInsNombre)}
                />
                &nbsp;&nbsp;
                <TextField
                    label = "Aula: "
                    type = "text"
                    margin= "normal"
                    variant="outlined"
                    inputRef={i => (this.frnGrpAula)}
                />
                 &nbsp;&nbsp;
                <TextField
                    label = "Limite del Grupo: "
                    type = "text"
                    margin= "normal"
                    variant="outlined"
                    inputRef={i => (this.frnGrpLimite)}
                />
                <br></br>
                &nbsp;&nbsp;
                <TextField
                    id="date_ini"
                    label="Feche de Inicio"
                    type="date"
                    defaultValue="2020"
                    className="Date_text"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputRef={i => (this.frnGrpDateIni)}
                />
                &nbsp;&nbsp;
                <TextField
                    id="date_fin"
                    label="Feche de Fin"
                    type="date"
                    defaultValue="2020"
                    className="Date_text"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputRef={i => (this.frnGrpDateFin)}
                />
                </form>
                </div>
            </div>
        );
    }
}
export default Grupos;
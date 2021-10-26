import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { withRouter } from 'react-router-dom';


function Item(props) {

  const click = () => {
    props.history.push(`/product/${props.item.id}`)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={click}>
        <CardMedia
          component="img"
          height="140"
          image={props.item.foto}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withRouter(Item);
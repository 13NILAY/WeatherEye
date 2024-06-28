import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import Typography from '@mui/material/Typography';

const Info = ({info}) => {
    console.log(info);
    const img="https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze.jpg";
    const RainyImage="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
    const HotImage="https://cdn.firstcry.com/education/2022/04/29104151/1007648908-768x525.jpg";
    const ColdImage="https://media.istockphoto.com/id/460682111/photo/panorama-of-the-winter-sunrise-in-mountains.jpg?s=612x612&w=0&k=20&c=DYe99hLsrxeGCIFy-sYTCnQCBllnoPVn3digKa7-J9I=";
    
  return (
    <div >
      <h1 style={{textAlign:"center"}}>Weather Info - {info.weather}</h1>
      <div style={{display:'flex', justifyContent:"center"}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={info.humidity>80
          ?RainyImage
          :info.temp>15
          ?HotImage
          :ColdImage
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
          {`${info.city} `}{info.humidity>80
          ?<ThunderstormTwoToneIcon/>
          :info.temp>15
          ?<WbSunnyTwoToneIcon/>
          :<AcUnitTwoToneIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature ={info.temp}&deg;C</p>
              <p>Humidity ={info.humidity}</p>
              <p>Min temp = {info.minTemp}&deg;C</p>
              <p>Max temp = {info.maxTemp}&deg;C</p>
              <p>The weather can be described as {info.weather} and feels like {info.feels_Like}&deg;C</p>
        </Typography>
      </CardContent>
  
    </Card>
      </div>
    </div>
  )
}

export default Info
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'

import imageService from '../../images/imageService'

const useStyles = makeStyles((theme, selected) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  image: {
    width: 100,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: '5px',
  },
  selectedImage: {
    width: 100,
    borderStyle: 'solid',
    borderColor: 'red',
    borderRadius: '5px',
  },
}))

const SelectImage = ({ imageNames, handleClick }) => {
  const classes = useStyles()
  const images = imageService()

  const [selected, setSelected] = useState('')

  const selectImage = (image) => () => {
    handleClick(image)
    setSelected(image)
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={110} className={classes.gridList} cols={4}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">Images</ListSubheader>
        </GridListTile>
        {imageNames.map((image) => (
          <GridListTile key={image}>
            {selected === image ? (
              <img
                className={classes.selectedImage}
                src={images.find((i) => i.label === image).image}
                alt={image}
                onClick={selectImage(image)}
              />
            ) : (
              <img
                className={classes.image}
                src={images.find((i) => i.label === image).image}
                alt={image}
                onClick={selectImage(image)}
              />
            )}
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default SelectImage

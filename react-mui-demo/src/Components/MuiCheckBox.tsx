import React, { useState } from 'react'
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

function MuiCheckBox () {
  const [acceptTnC, setAcceptTnC] = useState(false)

  const [skills, setSkills] = useState<string[]>([])

  console.log({
    acceptTnC
  })

  console.log({
    skills
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked)
  }

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)

    if (index === -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter(skill => skill !== event.target.value))
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label='I Accept Terms & Conditions'
          control={
            <Checkbox
              checked={acceptTnC}
              onChange={handleChange}
              size='small'
              color='warning'
            />
          }
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl error>

          <FormLabel> Select Skills </FormLabel>

          <FormGroup row>

            <FormControlLabel
              label='html'
              control={
                <Checkbox
                  value='html'
                  checked={skills.includes('html')}
                  onChange={handleSkillChange}
                />
              }
            />

            <FormControlLabel
              label='css'
              control={
                <Checkbox
                  value='css'
                  checked={skills.includes('css')}
                  onChange={handleSkillChange}
                />
              }
            />

            <FormControlLabel
              label='JavaScript'
              control={
                <Checkbox
                  value='JavaScript'
                  checked={skills.includes('JavaScript')}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>

          <FormHelperText> Write helperText here </FormHelperText>
          
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckBox

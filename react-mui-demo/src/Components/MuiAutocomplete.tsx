import { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

type Skill = {
  id: number
  label: string
}

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}))

function MuiAutocomplete () {
  const [value, setValue] = useState<string | null>(null)

  const [skill, setSkill] = useState<Skill | null>(null)

  //   console.log({
  //     value
  //   })

  console.log({
    skill
  })

  const handleChange1 = (event: any, newValue: string | null) => {
    setValue(newValue)
  }

  const handleChange2 = (event: any, newValue: Skill | null) => {
    setSkill(newValue)
  }

  return (
    <Stack spacing={4} width='250px'>

      <Stack spacing={2}>
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField label='Skills' {...params} />}
          value={value}
          onChange={handleChange1}
          // freeSolo // -> allows free texts to store
        />
      </Stack>

      <Stack spacing={2}>
        <Autocomplete
          options={skillsOptions}
          renderInput={(params) => <TextField label='Skills' {...params} />}
          value={skill}
          onChange={handleChange2}
        />
      </Stack>
      
    </Stack>
  )
}

export default MuiAutocomplete

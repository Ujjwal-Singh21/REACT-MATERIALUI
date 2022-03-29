import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'

function MuiAccordion () {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> Accordion-1 </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Nadeem–Shravan were the most successful Bollywood music directors of
            the 1990s until the early 2000s. They displayed a strong influence
            of Hindustani (classical / semi-classical) music in their
            compositions, and were the only composers during the 1990s and 2000s
            who relied heavily on three particular instruments: the bansuri, the
            sitar and the shehnai in almost all of their songs. By using these
            instruments in a modern way without disconnecting them from their
            original value, their contribution is unique compared to some rising
            music directors evolving a new music style beginning in the
            mid-1990s.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary
          id='panel2-header'
          aria-controls='panel2-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> Accordion-2 </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            They are considered one of the most successful and greatest music
            composers in Hindi cinema history. Their breakthrough soundtrack
            album was Aashiqui (1990), which sold 20 million units in India, and
            became the best-selling Bollywood soundtrack album of all time.
            Nadeem–Shravan were also behind many of the other best-selling
            Bollywood soundtrack albums of the 1990s. Their success helped
            establish the music label T-Series.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary
          id='panel3-header'
          aria-controls='panel3-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> Accordion-3 </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <Typography>
            The duo's career temporarily came to a halt with the murder of
            T-Series founder Gulshan Kumar by Mumbai underworld syndicate
            D-Company, with Nadeem Akhtar Saifi initially accused of
            involvement, before later being exonerated. The duo eventually made
            a comeback in the 2000s.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion

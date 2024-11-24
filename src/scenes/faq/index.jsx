import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
    {
        question: "An Important Question",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        question: "Another Important Question",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        question: "Your Favorite Question",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        question: "Some Random Question",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        question: "The Final Question",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
];

export default function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subTitle="FAQ Asked Questions Page" />
            {faqData.map((faq, index) => (
                <Accordion key={index} sx={{ marginTop: "10px" }} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            {faq.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}

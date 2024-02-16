'use client'

import React, { useState } from 'react'
import { CalendarDateRangePicker } from "./date-range-picker"
import { Button } from '@/components/ui/button'
import { addDays } from 'date-fns';
import { getDatePickRange } from '@/lib/apiRequest/formRequest';


function jsonToCsv(dataObject: any) {
    let csvString = '';

    for (const [key, value] of Object.entries(dataObject)) {
        if (!Array.isArray(value) || value.length === 0) continue;

        csvString += key + '\n';

        const headers = Object.keys(value[0]);
        csvString += headers.join(',') + '\n';

        for (const item of value) {
            const row = headers.map(header => {
                const escaped = ('' + item[header]).replace(/"/g, '\\"');
                return `"${escaped}"`;
            }).join(',');
            csvString += row + '\n';
        }
        csvString += '\n';
    }

    return csvString;
}


function CalendarDate() {
    const [dateRange, setDateRange] = useState({ from: new Date(), to: addDays(new Date(), 7) });

    const handleDownload = async () => {
        const response = await getDatePickRange(dateRange);
        if (response.status === 200) {
            const csvData = jsonToCsv(response.body);
            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.setAttribute('download', 'download.csv');
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } else {
            console.error('Failed to download data:', response.message);
        }
    };
    
    return (
        <>
            <CalendarDateRangePicker dateRange={dateRange} setDate={setDateRange} />
            <Button onClick={handleDownload}  >Télécharger les données</Button>
        </>
    )
}

export default CalendarDate

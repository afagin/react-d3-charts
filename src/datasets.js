import TimeSeries from './models/TimeSeries';

import { TIMESERIES_FREQUENCIES } from './config/timeseries';

export default [
    {
        id: '1',
        label: 'Monthly Airline Passenger Numbers 1949-1960',
        timeSeries: new TimeSeries([
            { value: 108, date: new Date('2001') },
            { value: 89, date: new Date('2002') },
            { value: 86, date: new Date('2003') },
            { value: 56, date: new Date('2004') },
            { value: 114, date: new Date('2005') },
            { value: 60, date: new Date('2006') },
            { value: 8, date: new Date('2007') },
            { value: 121, date: new Date('2008') },
            { value: 50, date: new Date('2009') },
            { value: 131, date: new Date('2010') },
            { value: 65, date: new Date('2011') },
            { value: 91, date: new Date('2012') },
            { value: 66, date: new Date('2013') },
            { value: 83, date: new Date('2014') },
            { value: 117, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '2',
        label: 'Sales Data with Leading Indicator',
        timeSeries: new TimeSeries([
            { value: 59, date: new Date('2001') },
            { value: 84, date: new Date('2002') },
            { value: 31, date: new Date('2003') },
            { value: 64, date: new Date('2004') },
            { value: 68, date: new Date('2005') },
            { value: 127, date: new Date('2006') },
            { value: 121, date: new Date('2007') },
            { value: 52, date: new Date('2008') },
            { value: 105, date: new Date('2009') },
            { value: 103, date: new Date('2010') },
            { value: 60, date: new Date('2011') },
            { value: 7, date: new Date('2012') },
            { value: 106, date: new Date('2013') },
            { value: 68, date: new Date('2014') },
            { value: 75, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '3',
        label: 'Biochemical Oxygen Demand',
        timeSeries: new TimeSeries([
            { value: 71, date: new Date('2001') },
            { value: 36, date: new Date('2002') },
            { value: 91, date: new Date('2003') },
            { value: 61, date: new Date('2004') },
            { value: 40, date: new Date('2005') },
            { value: 100, date: new Date('2006') },
            { value: 16, date: new Date('2007') },
            { value: 101, date: new Date('2008') },
            { value: 66, date: new Date('2009') },
            { value: 83, date: new Date('2010') },
            { value: 117, date: new Date('2011') },
            { value: 1, date: new Date('2012') },
            { value: 18, date: new Date('2013') },
            { value: 66, date: new Date('2014') },
            { value: 87, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '4',
        label: 'Determination of Formaldehyde',
        timeSeries: new TimeSeries([
            { value: 58, date: new Date('2001') },
            { value: 122, date: new Date('2002') },
            { value: 113, date: new Date('2003') },
            { value: 53, date: new Date('2004') },
            { value: 51, date: new Date('2005') },
            { value: 16, date: new Date('2006') },
            { value: 103, date: new Date('2007') },
            { value: 65, date: new Date('2008') },
            { value: 56, date: new Date('2009') },
            { value: 42, date: new Date('2010') },
            { value: 126, date: new Date('2011') },
            { value: 75, date: new Date('2012') },
            { value: 99, date: new Date('2013') },
            { value: 54, date: new Date('2014') },
            { value: 118, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '5',
        label: 'Hair and Eye Color of Statistics Students',
        timeSeries: new TimeSeries([
            { value: 43, date: new Date('2001') },
            { value: 128, date: new Date('2002') },
            { value: 131, date: new Date('2003') },
            { value: 114, date: new Date('2004') },
            { value: 50, date: new Date('2005') },
            { value: 131, date: new Date('2006') },
            { value: 65, date: new Date('2007') },
            { value: 91, date: new Date('2008') },
            { value: 74, date: new Date('2009') },
            { value: 130, date: new Date('2010') },
            { value: 76, date: new Date('2011') },
            { value: 10, date: new Date('2012') },
            { value: 112, date: new Date('2013') },
            { value: 70, date: new Date('2014') },
            { value: 27, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '6',
        label: 'Effectiveness of Insect Sprays',
        timeSeries: new TimeSeries([
            { value: 20, date: new Date('2001') },
            { value: 76, date: new Date('2002') },
            { value: 68, date: new Date('2003') },
            { value: 127, date: new Date('2004') },
            { value: 13, date: new Date('2005') },
            { value: 49, date: new Date('2006') },
            { value: 52, date: new Date('2007') },
            { value: 126, date: new Date('2008') },
            { value: 125, date: new Date('2009') },
            { value: 105, date: new Date('2010') },
            { value: 96, date: new Date('2011') },
            { value: 37, date: new Date('2012') },
            { value: 83, date: new Date('2013') },
            { value: 38, date: new Date('2014') },
            { value: 130, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '7',
        label: 'Quarterly Earnings per Johnson & Johnson Share',
        timeSeries: new TimeSeries([
            { value: 33, date: new Date('2001') },
            { value: 71, date: new Date('2002') },
            { value: 123, date: new Date('2003') },
            { value: 104, date: new Date('2004') },
            { value: 21, date: new Date('2005') },
            { value: 81, date: new Date('2006') },
            { value: 26, date: new Date('2007') },
            { value: 69, date: new Date('2008') },
            { value: 80, date: new Date('2009') },
            { value: 63, date: new Date('2010') },
            { value: 100, date: new Date('2011') },
            { value: 67, date: new Date('2012') },
            { value: 105, date: new Date('2013') },
            { value: 103, date: new Date('2014') },
            { value: 60, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '8',
        label: 'Level of Lake Huron 1875-1972',
        timeSeries: new TimeSeries([
            { value: 7, date: new Date('2001') },
            { value: 22, date: new Date('2002') },
            { value: 17, date: new Date('2003') },
            { value: 32, date: new Date('2004') },
            { value: 77, date: new Date('2005') },
            { value: 107, date: new Date('2006') },
            { value: 22, date: new Date('2007') },
            { value: 33, date: new Date('2008') },
            { value: 2, date: new Date('2009') },
            { value: 20, date: new Date('2010') },
            { value: 49, date: new Date('2011') },
            { value: 43, date: new Date('2012') },
            { value: 67, date: new Date('2013') },
            { value: 123, date: new Date('2014') },
            { value: 70, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '9',
        label: 'Flow of the River Nile',
        timeSeries: new TimeSeries([
            { value: 96, date: new Date('2001') },
            { value: 37, date: new Date('2002') },
            { value: 12, date: new Date('2003') },
            { value: 12, date: new Date('2004') },
            { value: 52, date: new Date('2005') },
            { value: 126, date: new Date('2006') },
            { value: 110, date: new Date('2007') },
            { value: 34, date: new Date('2008') },
            { value: 24, date: new Date('2009') },
            { value: 17, date: new Date('2010') },
            { value: 84, date: new Date('2011') },
            { value: 129, date: new Date('2012') },
            { value: 53, date: new Date('2013') },
            { value: 99, date: new Date('2014') },
            { value: 19, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '10',
        label: 'Global Land-Ocean Temperature Index (C) (Anomaly with Base: 1951-1980)',
        timeSeries: new TimeSeries([
            { value: -0.19, date: new Date('1880') },
            { value: -0.10, date: new Date('1881') },
            { value: -0.08, date: new Date('1882') },
            { value: -0.19, date: new Date('1883') },
            { value: -0.26, date: new Date('1884') },
            { value: -0.30, date: new Date('1885') },
            { value: -0.29, date: new Date('1886') },
            { value: -0.32, date: new Date('1887') },
            { value: -0.19, date: new Date('1888') },
            { value: -0.10, date: new Date('1889') },
            { value: -0.35, date: new Date('1890') },
            { value: -0.23, date: new Date('1891') },
            { value: -0.25, date: new Date('1892') },
            { value: -0.28, date: new Date('1893') },
            { value: -0.29, date: new Date('1894') },
            { value: -0.20, date: new Date('1895') },
            { value: -0.14, date: new Date('1896') },
            { value: -0.10, date: new Date('1897') },
            { value: -0.27, date: new Date('1898') },
            { value: -0.15, date: new Date('1899') },
            { value: -0.08, date: new Date('1900') },
            { value: -0.14, date: new Date('1901') },
            { value: -0.27, date: new Date('1902') },
            { value: -0.35, date: new Date('1903') },
            { value: -0.43, date: new Date('1904') },
            { value: -0.27, date: new Date('1905') },
            { value: -0.21, date: new Date('1906') },
            { value: -0.39, date: new Date('1907') },
            { value: -0.42, date: new Date('1908') },
            { value: -0.46, date: new Date('1909') },
            { value: -0.42, date: new Date('1910') },
            { value: -0.44, date: new Date('1911') },
            { value: -0.34, date: new Date('1912') },
            { value: -0.33, date: new Date('1913') },
            { value: -0.15, date: new Date('1914') },
            { value: -0.10, date: new Date('1915') },
            { value: -0.33, date: new Date('1916') },
            { value: -0.39, date: new Date('1917') },
            { value: -0.25, date: new Date('1918') },
            { value: -0.22, date: new Date('1919') },
            { value: -0.25, date: new Date('1920') },
            { value: -0.20, date: new Date('1921') },
            { value: -0.26, date: new Date('1922') },
            { value: -0.23, date: new Date('1923') },
            { value: -0.27, date: new Date('1924') },
            { value: -0.19, date: new Date('1925') },
            { value: -0.09, date: new Date('1926') },
            { value: -0.20, date: new Date('1927') },
            { value: -0.21, date: new Date('1928') },
            { value: -0.35, date: new Date('1929') },
            { value: -0.13, date: new Date('1930') },
            { value: -0.08, date: new Date('1931') },
            { value: -0.15, date: new Date('1932') },
            { value: -0.27, date: new Date('1933') },
            { value: -0.12, date: new Date('1934') },
            { value: -0.18, date: new Date('1935') },
            { value: -0.14, date: new Date('1936') },
            { value: -0.01, date: new Date('1937') },
            { value: -0.01, date: new Date('1938') },
            { value: -0.02, date: new Date('1939') },
            { value:  0.09, date: new Date('1940') },
            { value:  0.13, date: new Date('1941') },
            { value:  0.10, date: new Date('1942') },
            { value:  0.14, date: new Date('1943') },
            { value:  0.26, date: new Date('1944') },
            { value:  0.13, date: new Date('1945') },
            { value: -0.03, date: new Date('1946') },
            { value: -0.04, date: new Date('1947') },
            { value: -0.09, date: new Date('1948') },
            { value: -0.09, date: new Date('1949') },
            { value: -0.18, date: new Date('1950') },
            { value: -0.07, date: new Date('1951') },
            { value:  0.01, date: new Date('1952') },
            { value:  0.08, date: new Date('1953') },
            { value: -0.12, date: new Date('1954') },
            { value: -0.14, date: new Date('1955') },
            { value: -0.19, date: new Date('1956') },
            { value:  0.04, date: new Date('1957') },
            { value:  0.06, date: new Date('1958') },
            { value:  0.03, date: new Date('1959') },
            { value: -0.03, date: new Date('1960') },
            { value:  0.05, date: new Date('1961') },
            { value:  0.02, date: new Date('1962') },
            { value:  0.06, date: new Date('1963') },
            { value: -0.21, date: new Date('1964') },
            { value: -0.10, date: new Date('1965') },
            { value: -0.05, date: new Date('1966') },
            { value: -0.03, date: new Date('1967') },
            { value: -0.07, date: new Date('1968') },
            { value:  0.06, date: new Date('1969') },
            { value:  0.03, date: new Date('1970') },
            { value: -0.09, date: new Date('1971') },
            { value:  0.01, date: new Date('1972') },
            { value:  0.15, date: new Date('1973') },
            { value: -0.08, date: new Date('1974') },
            { value: -0.01, date: new Date('1975') },
            { value: -0.11, date: new Date('1976') },
            { value:  0.18, date: new Date('1977') },
            { value:  0.07, date: new Date('1978') },
            { value:  0.17, date: new Date('1979') },
            { value:  0.28, date: new Date('1980') },
            { value:  0.33, date: new Date('1981') },
            { value:  0.13, date: new Date('1982') },
            { value:  0.31, date: new Date('1983') },
            { value:  0.16, date: new Date('1984') },
            { value:  0.12, date: new Date('1985') },
            { value:  0.19, date: new Date('1986') },
            { value:  0.34, date: new Date('1987') },
            { value:  0.40, date: new Date('1988') },
            { value:  0.29, date: new Date('1989') },
            { value:  0.44, date: new Date('1990') },
            { value:  0.42, date: new Date('1991') },
            { value:  0.23, date: new Date('1992') },
            { value:  0.24, date: new Date('1993') },
            { value:  0.32, date: new Date('1994') },
            { value:  0.46, date: new Date('1995') },
            { value:  0.34, date: new Date('1996') },
            { value:  0.47, date: new Date('1997') },
            { value:  0.63, date: new Date('1998') },
            { value:  0.42, date: new Date('1999') },
            { value:  0.42, date: new Date('2000') },
            { value:  0.54, date: new Date('2001') },
            { value:  0.63, date: new Date('2002') },
            { value:  0.62, date: new Date('2003') },
            { value:  0.54, date: new Date('2004') },
            { value:  0.69, date: new Date('2005') },
            { value:  0.63, date: new Date('2006') },
            { value:  0.66, date: new Date('2007') },
            { value:  0.53, date: new Date('2008') },
            { value:  0.64, date: new Date('2009') },
            { value:  0.72, date: new Date('2010') },
            { value:  0.60, date: new Date('2011') },
            { value:  0.63, date: new Date('2012') },
            { value:  0.65, date: new Date('2013') },
            { value:  0.74, date: new Date('2014') },
            { value:  0.87, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
    {
        id: '11',
        label: 'Global Land-Ocean Average Temperature',
        timeSeries: new TimeSeries([
            // 14.8: 20th century average temperature over global land and ocean surfaces.
            // https://www.ncdc.noaa.gov/sotc/global/201605
            { value: 14.8 + -0.19, date: new Date('1880') },
            { value: 14.8 + -0.10, date: new Date('1881') },
            { value: 14.8 + -0.08, date: new Date('1882') },
            { value: 14.8 + -0.19, date: new Date('1883') },
            { value: 14.8 + -0.26, date: new Date('1884') },
            { value: 14.8 + -0.30, date: new Date('1885') },
            { value: 14.8 + -0.29, date: new Date('1886') },
            { value: 14.8 + -0.32, date: new Date('1887') },
            { value: 14.8 + -0.19, date: new Date('1888') },
            { value: 14.8 + -0.10, date: new Date('1889') },
            { value: 14.8 + -0.35, date: new Date('1890') },
            { value: 14.8 + -0.23, date: new Date('1891') },
            { value: 14.8 + -0.25, date: new Date('1892') },
            { value: 14.8 + -0.28, date: new Date('1893') },
            { value: 14.8 + -0.29, date: new Date('1894') },
            { value: 14.8 + -0.20, date: new Date('1895') },
            { value: 14.8 + -0.14, date: new Date('1896') },
            { value: 14.8 + -0.10, date: new Date('1897') },
            { value: 14.8 + -0.27, date: new Date('1898') },
            { value: 14.8 + -0.15, date: new Date('1899') },
            { value: 14.8 + -0.08, date: new Date('1900') },
            { value: 14.8 + -0.14, date: new Date('1901') },
            { value: 14.8 + -0.27, date: new Date('1902') },
            { value: 14.8 + -0.35, date: new Date('1903') },
            { value: 14.8 + -0.43, date: new Date('1904') },
            { value: 14.8 + -0.27, date: new Date('1905') },
            { value: 14.8 + -0.21, date: new Date('1906') },
            { value: 14.8 + -0.39, date: new Date('1907') },
            { value: 14.8 + -0.42, date: new Date('1908') },
            { value: 14.8 + -0.46, date: new Date('1909') },
            { value: 14.8 + -0.42, date: new Date('1910') },
            { value: 14.8 + -0.44, date: new Date('1911') },
            { value: 14.8 + -0.34, date: new Date('1912') },
            { value: 14.8 + -0.33, date: new Date('1913') },
            { value: 14.8 + -0.15, date: new Date('1914') },
            { value: 14.8 + -0.10, date: new Date('1915') },
            { value: 14.8 + -0.33, date: new Date('1916') },
            { value: 14.8 + -0.39, date: new Date('1917') },
            { value: 14.8 + -0.25, date: new Date('1918') },
            { value: 14.8 + -0.22, date: new Date('1919') },
            { value: 14.8 + -0.25, date: new Date('1920') },
            { value: 14.8 + -0.20, date: new Date('1921') },
            { value: 14.8 + -0.26, date: new Date('1922') },
            { value: 14.8 + -0.23, date: new Date('1923') },
            { value: 14.8 + -0.27, date: new Date('1924') },
            { value: 14.8 + -0.19, date: new Date('1925') },
            { value: 14.8 + -0.09, date: new Date('1926') },
            { value: 14.8 + -0.20, date: new Date('1927') },
            { value: 14.8 + -0.21, date: new Date('1928') },
            { value: 14.8 + -0.35, date: new Date('1929') },
            { value: 14.8 + -0.13, date: new Date('1930') },
            { value: 14.8 + -0.08, date: new Date('1931') },
            { value: 14.8 + -0.15, date: new Date('1932') },
            { value: 14.8 + -0.27, date: new Date('1933') },
            { value: 14.8 + -0.12, date: new Date('1934') },
            { value: 14.8 + -0.18, date: new Date('1935') },
            { value: 14.8 + -0.14, date: new Date('1936') },
            { value: 14.8 + -0.01, date: new Date('1937') },
            { value: 14.8 + -0.01, date: new Date('1938') },
            { value: 14.8 + -0.02, date: new Date('1939') },
            { value: 14.8 +  0.09, date: new Date('1940') },
            { value: 14.8 +  0.13, date: new Date('1941') },
            { value: 14.8 +  0.10, date: new Date('1942') },
            { value: 14.8 +  0.14, date: new Date('1943') },
            { value: 14.8 +  0.26, date: new Date('1944') },
            { value: 14.8 +  0.13, date: new Date('1945') },
            { value: 14.8 + -0.03, date: new Date('1946') },
            { value: 14.8 + -0.04, date: new Date('1947') },
            { value: 14.8 + -0.09, date: new Date('1948') },
            { value: 14.8 + -0.09, date: new Date('1949') },
            { value: 14.8 + -0.18, date: new Date('1950') },
            { value: 14.8 + -0.07, date: new Date('1951') },
            { value: 14.8 +  0.01, date: new Date('1952') },
            { value: 14.8 +  0.08, date: new Date('1953') },
            { value: 14.8 + -0.12, date: new Date('1954') },
            { value: 14.8 + -0.14, date: new Date('1955') },
            { value: 14.8 + -0.19, date: new Date('1956') },
            { value: 14.8 +  0.04, date: new Date('1957') },
            { value: 14.8 +  0.06, date: new Date('1958') },
            { value: 14.8 +  0.03, date: new Date('1959') },
            { value: 14.8 + -0.03, date: new Date('1960') },
            { value: 14.8 +  0.05, date: new Date('1961') },
            { value: 14.8 +  0.02, date: new Date('1962') },
            { value: 14.8 +  0.06, date: new Date('1963') },
            { value: 14.8 + -0.21, date: new Date('1964') },
            { value: 14.8 + -0.10, date: new Date('1965') },
            { value: 14.8 + -0.05, date: new Date('1966') },
            { value: 14.8 + -0.03, date: new Date('1967') },
            { value: 14.8 + -0.07, date: new Date('1968') },
            { value: 14.8 +  0.06, date: new Date('1969') },
            { value: 14.8 +  0.03, date: new Date('1970') },
            { value: 14.8 + -0.09, date: new Date('1971') },
            { value: 14.8 +  0.01, date: new Date('1972') },
            { value: 14.8 +  0.15, date: new Date('1973') },
            { value: 14.8 + -0.08, date: new Date('1974') },
            { value: 14.8 + -0.01, date: new Date('1975') },
            { value: 14.8 + -0.11, date: new Date('1976') },
            { value: 14.8 +  0.18, date: new Date('1977') },
            { value: 14.8 +  0.07, date: new Date('1978') },
            { value: 14.8 +  0.17, date: new Date('1979') },
            { value: 14.8 +  0.28, date: new Date('1980') },
            { value: 14.8 +  0.33, date: new Date('1981') },
            { value: 14.8 +  0.13, date: new Date('1982') },
            { value: 14.8 +  0.31, date: new Date('1983') },
            { value: 14.8 +  0.16, date: new Date('1984') },
            { value: 14.8 +  0.12, date: new Date('1985') },
            { value: 14.8 +  0.19, date: new Date('1986') },
            { value: 14.8 +  0.34, date: new Date('1987') },
            { value: 14.8 +  0.40, date: new Date('1988') },
            { value: 14.8 +  0.29, date: new Date('1989') },
            { value: 14.8 +  0.44, date: new Date('1990') },
            { value: 14.8 +  0.42, date: new Date('1991') },
            { value: 14.8 +  0.23, date: new Date('1992') },
            { value: 14.8 +  0.24, date: new Date('1993') },
            { value: 14.8 +  0.32, date: new Date('1994') },
            { value: 14.8 +  0.46, date: new Date('1995') },
            { value: 14.8 +  0.34, date: new Date('1996') },
            { value: 14.8 +  0.47, date: new Date('1997') },
            { value: 14.8 +  0.63, date: new Date('1998') },
            { value: 14.8 +  0.42, date: new Date('1999') },
            { value: 14.8 +  0.42, date: new Date('2000') },
            { value: 14.8 +  0.54, date: new Date('2001') },
            { value: 14.8 +  0.63, date: new Date('2002') },
            { value: 14.8 +  0.62, date: new Date('2003') },
            { value: 14.8 +  0.54, date: new Date('2004') },
            { value: 14.8 +  0.69, date: new Date('2005') },
            { value: 14.8 +  0.63, date: new Date('2006') },
            { value: 14.8 +  0.66, date: new Date('2007') },
            { value: 14.8 +  0.53, date: new Date('2008') },
            { value: 14.8 +  0.64, date: new Date('2009') },
            { value: 14.8 +  0.72, date: new Date('2010') },
            { value: 14.8 +  0.60, date: new Date('2011') },
            { value: 14.8 +  0.63, date: new Date('2012') },
            { value: 14.8 +  0.65, date: new Date('2013') },
            { value: 14.8 +  0.74, date: new Date('2014') },
            { value: 14.8 +  0.87, date: new Date('2015') },
        ], TIMESERIES_FREQUENCIES.ANNUAL),
    },
];

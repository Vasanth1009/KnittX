import React from 'react';
import OpenSans from '../../../assets/fonts/OpenSans/OpenSans-Regular.ttf';
import OpenSansLight from '../../../assets/fonts/OpenSans/OpenSans-Light.ttf';
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
} from '@react-pdf/renderer';
import {
  TableCell,
  Table,
  TableBody,
  DataTableCell,
  TableHeader,
} from '@david.kucsai/react-pdf-table';

function Invoice() {
  const style = StyleSheet.create({
    headerWrapper: {
      backgroundColor: 'rgba(39, 174, 96, 0.1)',
      padding: '10px 20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    invoiceHeading: {
      display: 'flex',
      alignSelf: 'center',
      fontSize: '40px',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: '1px',
      color: 'rgba(39, 174, 96, 1)',
      fontFamily: 'Open Sans',
      padding: '20px',
    },
    invoiceTitle: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-end',
    },
    billedBy: {
      textAlign: 'left',
      padding: '20px',
    },
    businessName: {
      fontSize: '15px',
      fontWeight: 'normal',
      fontFamily: 'Open Sans',
    },
    billedByAddress: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      fontSize: '10px',
      fontWeight: 'normal',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      lineHeight: '1.57',
      letterSpacing: '1px',
      textAlign: 'left',
      color: '#516173',
      marginTop: '12px',
    },
    contentWrapper: {
      paddingTop: '10px',
      padding: '40px',
    },
    addressSectionWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    invoiceDetailsWrapper: {
      width: '33.3%',
      height: '40px',
      paddingRight: '20px',
      backgroundColor: 'rgba(39, 174, 96, 0.1)',
    },
    invoiceDetailsSection: {
      flex: 1,
    },
    billedBySection: {
      flex: 2,
    },
  });

  Font.register({
    family: 'Open Sans',
    fonts: [
      {
        src: OpenSans,
      },
      {
        src: OpenSansLight,
        fontWeight: 'light',
      },
    ],
  });

  return (
    <div>
      <PDFViewer
        style={{
          width: '100vw',
          height: '100vh',
          margin: '0',
          padding: '0',
        }}
      >
        <Document>
          <Page>
            <View style={style.headerWrapper}>
              <View style={style.invoiceHeading}>
                <Text style={style.invoiceTitle}>Tax Invoice</Text>
              </View>
              {/* <View style={style.billedBy}>
                <Text style={style.businessName}>Sri Pranav Tex</Text>
                <Text style={style.billedByAddress}>
                  5/566, Indira Nagar, Pitchampalayam pudur, Tiruppur - 641603
                </Text>
              </View> */}
            </View>
            <View style={style.contentWrapper}>
              <View style={style.addressSectionWrapper}>
                <View style={style.invoiceDetailsWrapper}>
                  <Text style={style.invoiceDetailsSection}>Test</Text>
                </View>
                <View style={style.invoiceDetailsWrapper}>
                  <Text style={style.billedBySection}>Test</Text>
                </View>
                <View style={style.invoiceDetailsWrapper}>
                  <Text style={style.invoiceDetailsSection}>Test</Text>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default Invoice;

import React from 'react';
import OpenSans from '../../../assets/fonts/OpenSans/OpenSans-Regular.ttf';
import OpenSansLight from '../../../assets/fonts/OpenSans/OpenSans-Light.ttf';
import OpenSansBold from '../../../assets/fonts/OpenSans/OpenSans-Bold.ttf';
import OpenSansSemiBold from '../../../assets/fonts/OpenSans/OpenSans-SemiBold.ttf';
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
} from '@react-pdf/renderer';

const InvoicePDFPreview = () => {
  const items = [
    {
      description: 'Single Jersey 30 Dia 30s Navy',
      hsnsac: '6001',
      quantity: 679.3,
      rate: 12,
    },
    {
      description: 'Single Jersey 30 Dia 30s Navy',
      hsnsac: '6001',
      quantity: 679.3,
      rate: 12,
    },
    {
      description: 'Single Jersey 30 Dia 30s Brown',
      hsnsac: '6001',
      quantity: 1079.3,
      rate: 12,
    },
    {
      description: 'Single Jersey 30 Dia 30s Brown',
      hsnsac: '6001',
      quantity: 1079.3,
      rate: 12,
    },
    {
      description: 'Single Jersey 30 Dia 30s Brown',
      hsnsac: '6001',
      quantity: 1079.3,
      rate: 12,
    },
    {
      description: 'Single Jersey 30 Dia 30s Brown',
      hsnsac: '6001',
      quantity: 1079.3,
      rate: 12,
    },
    {
      description: 'Single Jersey 30 Dia 30s Brown',
      hsnsac: '6001',
      quantity: 1079.3,
      rate: 12,
    },
    {
      description: 'Single Jersey 30 Dia 30s Brown',
      hsnsac: '6001',
      quantity: 1079.3,
      rate: 12,
    },
    {
      description: 'Single Jersey 30 Dia 30s Brown',
      hsnsac: '6001',
      quantity: 1079.3,
      rate: 12,
    },
    {
      description: 'Single Jersey 30 Dia 30s Brown',
      hsnsac: '6001',
      quantity: 1079.3,
      rate: 12,
    },
  ];
  const style = StyleSheet.create({
    invoice: {
      fontSize: '10px',
    },
    invoiceHeader: {
      backgroundColor: '#e6f7ff',
      padding: '10px 50px 10px 20px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'Open Sans',
    },
    invoiceTitle: {
      fontSize: '30px',
      color: '#1890ff',
    },
    invoiceInfoDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: '4px 0',
    },
    key: {
      fontWeight: 'semibold',
      fontFamily: 'Open Sans',
    },
    value: {
      fontFamily: 'Open Sans',
    },
    invoiceBody: {
      padding: '0 20px',
    },
    addressDetails: {
      display: 'flex',
      flexDirection: 'row',
      padding: '20px 0',
    },
    addressContainer: {
      width: '50%',
      lineHeight: 2,
      paddingLeft: '20px',
    },
    billTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'Open Sans',
      color: '#1890ff',
    },
    businessName: {
      fontSize: '12px',
      fontWeight: 'semibold',
      fontFamily: 'Open Sans',
    },
    address: {
      width: '90%',
    },
    contactDetails: {
      position: 'relative',
      bottom: 0,
    },
    contactDetail: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    table: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: '20px',
      borderWidth: 1,
      borderColor: '#bff0fd',
    },
    tableHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 24,
      fontWeight: 'semibold',
      fontFamily: 'Open Sans',
      borderBottomWidth: 1,
      borderBottomColor: '#bff0fd',
      backgroundColor: '#bff0fd',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: '#bff0fd',
      borderBottomWidth: 1,
      height: 24,
    },
    sno: {
      width: '10%',
      textAlign: 'center',
    },
    description: {
      width: '50%',
      textAlign: 'left',
      paddingLeft: 8,
    },
    hsnsac: {
      width: '10%',
      textAlign: 'center',
      paddingRight: 8,
    },
    qty: {
      width: '10%',
      textAlign: 'center',
      paddingRight: 8,
    },
    rate: {
      width: '10%',
      textAlign: 'center',
      paddingRight: 8,
    },
    amount: {
      width: '10%',
      textAlign: 'center',
      paddingRight: 8,
    },
    termsAndConditions: {
      marginTop: '15px',
    },
    termsAndCondition: {
      marginTop: '5px',
      fontFamily: 'Open Sans',
    },
    totalBreakups: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    taxable: {
      width: '180px',
      flexDirection: 'row',
      lineHeight: 2,
      justifyContent: 'space-between',
    },
    valuesRight: {
      alignItems: 'flex-end',
      letterSpacing: '1px',
    },
    valuesLeft: {
      marginLeft: '20px',
    },
    totalAmount: {
      fontSize: '12px',
      borderRadius: '5px',
      fontWeight: 'semibold',
      fontFamily: 'Open Sans',
    },
    notes: {
      height: '160px',
    },
    invoiceFooter: {
      width: '100%',
      height: '150px',
      backgroundColor: '#e6f7ff',
      padding: '20px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    invoiceFooterAbsolute: {
      position: 'absolute',
      bottom: 0,
    },
    bankDetails: {
      width: '50%',
      borderRight: '1px solid #4895ef',
    },
    bankDetailTitle: {
      fontSize: '12px',
      fontWeight: 'semibold',
      fontFamily: 'Open Sans',
      marginBottom: '10px',
    },
    bankInfo: {
      flexDirection: 'row',
      lineHeight: 2,
    },
    signature: {
      position: 'relative',
      top: '50px',
      fontSize: '12px',
      fontWeight: 'semibold',
      fontFamily: 'Open Sans',
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
      {
        src: OpenSansBold,
        fontWeight: 'bold',
      },
      {
        src: OpenSansSemiBold,
        fontWeight: 'semi-bold',
      },
    ],
  });

  return (
    <div>
      <PDFViewer
        style={{
          width: '100%',
          height: '85vh',
          margin: '0',
          padding: '0',
        }}
      >
        <Document>
          <Page style={style.invoice}>
            <View style={style.invoiceHeader}>
              <View>
                <Text style={style.invoiceTitle}>Tax Invoice</Text>
              </View>
              <View style={style.invoiceInfo}>
                <View style={style.invoiceInfoDetail}>
                  <Text style={style.key}>Invoice No: </Text>
                  <Text style={style.value}>#00001</Text>
                </View>
                <View style={style.invoiceInfoDetail}>
                  <Text style={style.key}>Date: </Text>
                  <Text style={style.value}>10/01/2022</Text>
                </View>
                <View style={style.invoiceInfoDetail}>
                  <Text style={style.key}>DC No: </Text>
                  <Text style={style.value}>100</Text>
                </View>
              </View>
            </View>
            <View style={style.invoiceBody}>
              <View style={style.addressDetails}>
                <View style={style.addressContainer}>
                  <Text style={style.billTitle}>Billed By</Text>
                  <Text style={style.businessName}>KnittX Pvt Ltd</Text>
                  <Text style={style.address}>
                    No.16, Kumar Nagar, Velampalayam pudur, Chennai, Tamil Nadu,
                    India - 601 606
                  </Text>
                  <View style={style.contactDetails}>
                    <View style={style.contactDetail}>
                      <Text style={style.key}>Phone: </Text>
                      <Text style={style.value}>9876543210</Text>
                    </View>
                    <View style={style.contactDetail}>
                      <Text style={style.key}>GSTIN: </Text>
                      <Text style={style.value}>33ABYSS4453P2ZA</Text>
                    </View>
                    <View style={style.contactDetail}>
                      <Text style={style.key}>Email: </Text>
                      <Text style={style.value}>example@gmail.com</Text>
                    </View>
                  </View>
                </View>
                <View style={style.addressContainer}>
                  <Text style={style.billTitle}>Billed To</Text>
                  <Text style={style.businessName}>
                    DEE ESS KNITTING MILLS Pvt.LTD
                  </Text>
                  <Text style={style.address}>
                    No.16, Kumar Nagar, Velampalayam pudur, Chennai, Tamil Nadu,
                    India - 601 606
                  </Text>
                  <View style={style.contactDetails}>
                    <View style={style.contactDetail}>
                      <Text style={style.key}>Phone: </Text>
                      <Text style={style.value}>9346368544</Text>
                    </View>
                    <View style={style.contactDetail}>
                      <Text style={style.key}>GSTIN: </Text>
                      <Text style={style.value}>33AACSE12334R1Z1</Text>
                    </View>
                    <View style={style.contactDetail}>
                      <Text style={style.key}>Email: </Text>
                      <Text style={style.value}>example@gmail.com</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={style.table}>
                <View style={style.tableHeader}>
                  <Text style={style.sno}>S.No</Text>
                  <Text style={style.description}>Description of Goods</Text>
                  <Text style={style.hsnsac}>HSN/SAC</Text>
                  <Text style={style.qty}>Qty(Kgs)</Text>
                  <Text style={style.rate}>Rate/Kg</Text>
                  <Text style={style.amount}>Amount</Text>
                </View>
                {items.map((item, index) => (
                  <View style={style.row} key={index + 1}>
                    <Text style={style.sno}>{index + 1}</Text>
                    <Text style={style.description}>{item.description}</Text>
                    <Text style={style.hsnsac}>{item.hsnsac}</Text>
                    <Text style={style.qty}>{item.quantity}</Text>
                    <Text style={style.rate}>{item.rate}</Text>
                    <Text style={style.amount}>
                      {(item.quantity * item.rate).toFixed(2)}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={style.totalBreakups}>
                <View style={style.totalBreakupsLeft}>
                  <View style={style.amountInWords}>
                    <Text style={style.key}>Total Amount (in words)</Text>
                    <Text style={style.value}>
                      Eighteen Thousand Nine Hundred And Forty Only.
                    </Text>
                  </View>
                  <View style={style.termsAndConditions}>
                    <Text style={style.key}>Terms And Conditions</Text>
                    <Text style={style.termsAndCondition}>
                      1. Thanks for doing Business with us! <br />
                    </Text>
                    <Text style={style.termsAndCondition}>
                      2. Subject to Tirupur jurisdiction only.
                    </Text>
                  </View>
                </View>
                <View style={style.totalBreakupsRight}>
                  <View style={style.taxable}>
                    <View style={style.keys}>
                      <Text>Taxable Amount : </Text>
                      <Text>CGST @ 2.50% : </Text>
                      <Text>SGST @ 2.50% : </Text>
                      <Text>Rounded Off : </Text>
                    </View>
                    <View style={style.valuesRight}>
                      <Text style={style.value}>$ 17903.20</Text>
                      <Text style={style.value}>$ 514.17</Text>
                      <Text style={style.value}>$ 514.17</Text>
                      <Text style={style.value}>$ 12.28</Text>
                    </View>
                  </View>
                  <View
                    style={Object.assign({}, style.taxable, style.totalAmount)}
                  >
                    <View style={style.keys}>
                      <Text>Total : </Text>
                    </View>
                    <View style={style.valuesRight}>
                      <Text>$ 18,940.00</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={style.notes}></View>
            </View>
            <View
              style={Object.assign(
                {},
                style.invoiceFooter,
                items.length <= 10
                  ? style.invoiceFooterAbsolute
                  : style.invoiceFooterRelative
              )}
            >
              <View style={style.bankDetails}>
                <Text style={style.bankDetailTitle}>Bank Details</Text>
                <View style={style.bankInfo}>
                  <View style={style.keys}>
                    <Text style={style.key}>Account Number : </Text>
                    <Text style={style.key}>IFSC : </Text>
                    <Text style={style.key}>Bank : </Text>
                    <Text style={style.key}>Branch : </Text>
                  </View>
                  <View style={style.valuesLeft}>
                    <Text style={style.value}>38213568098</Text>
                    <Text style={style.value}>SBIN0034246</Text>
                    <Text style={style.value}>State Bank of India</Text>
                    <Text style={style.value}>Chennai</Text>
                  </View>
                </View>
              </View>
              <View style={style.signature}>
                <Text>Authorized Signatory</Text>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default InvoicePDFPreview;

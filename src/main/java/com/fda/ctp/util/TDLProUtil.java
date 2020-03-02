/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fda.ctp.exception.TDLProException;

/**
 *
 * @author rabalasubramani3
 */
public class TDLProUtil {

	private static final Logger logger = LoggerFactory.getLogger(TDLProUtil.class);

	/**
	 * Hidden default constructor to prevent instantiation.
	 */
	private TDLProUtil() {
		/*
		 * Don't want user to instantiate. All members should be static.
		 */
	}

	/**
	 * Parse a string date into a java date.
	 *
	 * @param dateString
	 * @return Date
	 *
	 */
	public static LocalDate parseStringToDate(String dateString) {
		/* if date does not exist, return null */
		if (dateString == null || dateString.isEmpty()) {
			return null;
		}
		/*
		 * test to see if it's MM/dd/yyyy (database) or yyyy-MM-dd (date picker format)
		 */
		DateTimeFormatter dtFormatter;
		String stringToParse;
		if (dateString.matches("\\d{2}/\\d{2}/\\d{4}")) {
			dtFormatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
			stringToParse = dateString;
		} else if (dateString.matches("[a-zA-Z]{3} [a-zA-Z]{3} [0-9]{2} [0-9]{4}.+")) {
			dtFormatter = DateTimeFormatter.ofPattern("EEE MMM dd yyyy");
//            simpleDateFormat = new SimpleDateFormat("EEE MMM dd yyyy", Locale.US);
			stringToParse = dateString.substring(0, 15);
		} else if (dateString.matches("[0-9]{8}")) {
			dtFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
//            simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
			stringToParse = dateString;
		} else if (dateString.matches("\\d{4}-\\d{2}-\\d{2}")) {
			dtFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//            simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.US);
			stringToParse = dateString;
		} else if (dateString.matches("[a-zA-Z]{3} [0-9]{2}[,] [0-9]{4}")) {
			dtFormatter = DateTimeFormatter.ofPattern("MMM dd, yyyy");
//        	simpleDateFormat = new SimpleDateFormat("MMM dd, yyyy", Locale.US);
			stringToParse = dateString;
		} else {
			dtFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS");
//            simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS", Locale.US);
			stringToParse = dateString;
		}
//        simpleDateFormat.setLenient(false);

		/* parse, throw exception with error message on failure */
		try {
			logger.debug("parsing date {}.", stringToParse);
			return LocalDate.parse(stringToParse, dtFormatter);
//            return simpleDateFormat.parse(stringToParse);
		} catch (Exception e) {
			logger.warn("Parsing failed on {}. \n {}", dateString, e);
			throw new TDLProException("Invalid date format.", e);
		}
	}

	/**
	 * Parse a date into a string.
	 *
	 * @param date
	 * @return String
	 */
	public static String parseDateToString(LocalDate date) {
		/* return empty string if date is null */
		if (date == null) {
			return Constants.EMPTY;
		}
		DateTimeFormatter dtFormatter;
		dtFormatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
		return dtFormatter.toString();
//        DateFormat simpleDate = new SimpleDateFormat("MM/dd/yyyy", Locale.US);
		// return simpleDate.format(date);
	}

	public static String parseDateToString2(LocalDate date) {
		/* return empty string if date is null */
		if (date == null) {
			return Constants.EMPTY;
		}
		DateTimeFormatter dtFormatter;
		dtFormatter = DateTimeFormatter.ofPattern("yyy-MM-dd");
		return dtFormatter.toString();
//        DateFormat simpleDate = new SimpleDateFormat("yyy-MM-dd", Locale.US);
//        return simpleDate.format(date);
	}

	public static String parseDateToString3(LocalDate date) {
		/* return empty string if date is null */
		if (date == null) {
			return Constants.EMPTY;
		}
		DateTimeFormatter dtFormatter;
		dtFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		return dtFormatter.toString();
//        DateFormat simpleDate = new SimpleDateFormat("yyyy-MM-dd", Locale.US);
//        return simpleDate.format(date);
	}

	/**
	 * Parse a date into military time.
	 *
	 * @param date
	 * @return
	 */
//    public static String parseTimeToString(LocalDate date) {
//        if (date == null) {
//            return Constants.EMPTY;
//        }
//        DateFormat simpleDate = new SimpleDateFormat("HH:mm");
//        return simpleDate.format(date);
//    }

	public static String returnSetAsCSV(Set<String> set) {
		int count = 0;
		StringBuilder text = new StringBuilder(Constants.EMPTY);
		if (set != null && !set.isEmpty()) {
			for (String member : set) {
				text.append("'");
				text.append(member);
				text.append("'");
				if (++count != set.size()) {
					text.append(",");
				}
			}
		}
		return text.toString();
	}

	public static String formatRawPhoneNumber(String phoneNum, String countryDialCd) {
		if (phoneNum == null) {
			return "";
		}
		if (phoneNum.contains("-")) {
			phoneNum = phoneNum.replaceAll("-", "");
		}
		StringBuilder phoneBuilder = new StringBuilder(phoneNum);
		if (!phoneNum.contains("(")) {
			int length = phoneNum.length();
			if (length > 3) {
				phoneBuilder.insert(0, "(");
				phoneBuilder.insert(4, ") ");
				length += 3;
			}
			if (length > 9) {
				phoneBuilder.insert(9, "-");
				length++;
			}
			if (length > 14) {
				phoneBuilder.insert(14, " ");
			}
		}
		if (countryDialCd != null) {
			if (!(countryDialCd.equals("1") || countryDialCd.equals("+1"))) {
				phoneBuilder.insert(0, countryDialCd + " ");
			}
		}
		return phoneBuilder.toString();
	}

	/**
	 * Get fiscal year from a mmddyyyy date string.
	 *
	 * @param mmddyyyy
	 * @return
	 */
	public static Long getFiscalYearMMDDYYYY(String mmddyyyy) {
		Long returnVal = null;
		if (mmddyyyy != null && mmddyyyy.length() > 5) {
			int yearVal = 0;
			int monthVal = 0;
			int firstSlash = mmddyyyy.indexOf('/');
			int lastSlash = mmddyyyy.lastIndexOf('/');
			if (firstSlash == lastSlash) {
				return null;
			}
			String month = mmddyyyy.substring(0, firstSlash);
			String year = mmddyyyy.substring(lastSlash + 1, mmddyyyy.length());
			try {
				yearVal = Integer.parseInt(year);
				monthVal = Integer.parseInt(month);
			} catch (Exception ex) {
				return null;
			}
			if (monthVal > 9) {
				yearVal++;
			}
			returnVal = new Long(yearVal);
		}
		return returnVal;
	}

	/**
	 * Get fiscal year from a yyyymmdd format string.
	 *
	 * @param yyyymmdd
	 * @return
	 */
	public static Long getFiscalYearYYYYMMDD(String yyyymmdd) {
		Long returnVal = null;
		if (yyyymmdd != null && yyyymmdd.length() == 8) {
			int yearVal = 0;
			int monthVal = 0;
			String month = yyyymmdd.substring(4, 6);
			String year = yyyymmdd.substring(0, 4);
			try {
				yearVal = Integer.parseInt(year);
				monthVal = Integer.parseInt(month);
			} catch (Exception ex) {
				return null;
			}
			if (monthVal > 9) {
				yearVal++;
			}
			returnVal = new Long(yearVal);
		}
		return returnVal;
	}

	/**
	 * Derive a date from month and year.
	 *
	 * @param month
	 * @param year
	 * @return
	 */
	public static LocalDate getDateFromMonthAndYear(int month, int year) {
//        Calendar calendar = Calendar.getInstance();
//        calendar.clear();
//        calendar.set(Calendar.MONTH, month);
//        calendar.set(Calendar.YEAR, year);
//        Date date = calendar.getTime();
		return LocalDate.of(year, month, 1);
	}

	/**
	 * Strip all the non-digit characters, return just numbers.
	 *
	 * @param input
	 * @return
	 */
	public static String stripNonDigits(final CharSequence input) {
		final StringBuilder sb = new StringBuilder(input.length());
		for (int i = 0; i < input.length(); i++) {
			final char c = input.charAt(i);
			if (c > 47 && c < 58) {
				sb.append(c);
			}
		}
		return sb.toString();
	}

	/**
	 * Test to see if string is null or empty.
	 *
	 * @param test
	 * @return
	 */
	public static boolean stringNullOrEmpty(String test) {
		boolean returnVal = true;
		if (test != null) {
			if (test.trim().length() > 0) {
				returnVal = false;
			}
		}
		return returnVal;
	}

	/**
	 * Return two digit year from long value. I.E. 2017 returns "17".
	 *
	 * @param fiscalYear
	 * @return
	 */
	public static String twoDigitYear(long fiscalYear) {
		String yearString = Long.toString(fiscalYear);
		int yearLength = yearString.length();
		if (yearLength < 4) {
			throw new TDLProException("Invalid fiscal year.");
		}
		return yearString.substring(yearLength - 2);
	}

	/**
	 * REQ: Stands for roughly equal to based on the precision set (float)
	 *
	 * @param v1        the v 1
	 * @param v2        the v 2
	 * @param precision the precision
	 * @return true, if successful
	 */
	public static boolean REQ(float v1, float v2, float precision) {
		if (Math.abs(v1 - v2) < precision) {
			return true;
		}
		return false;
	}

//    public static Long getFiscalYearMMMyy(String value) {
//
//        String[] dtprts = value.split("-");
//        DateTimeFormatter formatter = DateTimeFormat.forPattern("MMM");
//        Long yr = null;
//        try {
//            DateTime dt = formatter.parseDateTime(dtprts[0]);
//
//            int mnth = dt.getMonthOfYear();
//            yr = Long.parseLong(dtprts[1]);
//            if (mnth > 9) {
//                yr = Long.parseLong(dtprts[1]);
//                yr = ++yr % 100;
//            }
//        } catch (Exception ex) {
//            return null;
//        }
//
//        return yr;
//    }

	/**
	 * REQD: Stands for roughly equal to based on the precision set (double)
	 *
	 * @param v1        the v 1
	 * @param v2        the v 2
	 * @param precision the precision
	 * @return true, if successful
	 */
	public static boolean REQD(double v1, double v2, double precision) {
		if (Math.abs(v1 - v2) < precision) {
			return true;
		}
		return false;
	}

	/**
	 * 
	 * @param date
	 * @return
	 */
//    public static LocalDate getLocalDate(Date date){
//        if(date == null) return null;
//        return new LocalDate(date);
//    }

	/**
	 * Returns day of week in string format SUNDAY, MONDAY, TUESDAY
	 * 
	 * @param dt
	 * @return
	 */
	public static String getDayOfWeek(LocalDate dt) {
		return dt.getDayOfWeek().toString().toUpperCase();
//        LocalDate.Property pDoW = dt.dayOfWeek();
//        String strDay = pDoW.getAsText(Locale.getDefault());
//        return strDay.toUpperCase();
	}

	/**
	 * 
	 * @param dt
	 * @return
	 */
	public static boolean isSaturday(LocalDate dt) {
		if (dt.getDayOfWeek() == DayOfWeek.SATURDAY) {
			return true;
		}
		return false;
	}

	public static String safeToString(Object result) {
		if (result != null) {
			return result.toString().trim();
		}
		return null;
	}

	public static Long safeToLong(Object result) {
		if (result != null) {
			return (Long.parseLong((TDLProUtil.safeToString(result))));
		}
		return null;
	}

	/**
	 * 
	 * @param curDate
	 * @return
	 */
	public static LocalDate getSaturdayOfWeek(LocalDate curDate) {
		switch (curDate.getDayOfWeek()) {
		case SUNDAY:
			return curDate.plusDays(6);

		case MONDAY:
			return curDate.plusDays(5);

		case TUESDAY:
			return curDate.plusDays(4);

		case WEDNESDAY:
			return curDate.plusDays(3);

		case THURSDAY:
			return curDate.plusDays(2);

		case FRIDAY:
			return curDate.plusDays(1);

		default:
			break;
		}
		return curDate;
	}

	public static Double safeToDouble(Object result) {
		if (result != null) {
			try {
				boolean hasParens = false;
				String str = safeToString(result);
				if (str.contains("(")) {
					str = str.replaceAll("[()]", "");
					hasParens = true;
				}
				Double val = Double.parseDouble(str);
				if (hasParens) {
					val = -val;
//                	logger.info(String.format("Processed negative number %.2f", val));
				}
				return val;
			} catch (NumberFormatException e) {
				return 0.0;
			}
		}
		return 0.0;
	}

	public static LocalDate safeToDate(Object result) {
		if (result != null) {
			return (parseStringToDate(TDLProUtil.safeToString(result)));
		}
		return null;
	}

	public static String exponentToDateConverter(String dateTextValue) throws ParseException {
		Double value = 0.0;

		if(!(dateTextValue == null || dateTextValue.isEmpty())) {
			value = Double.parseDouble(dateTextValue);
		}else {
			return dateTextValue;
		}

		long myLong = (long) (value * 10000000) / 10000000;

		String dateValue = Long.toString(myLong);
		Date date1 = new SimpleDateFormat("yyyyMMdd").parse(dateValue);
		String pattern = "yyyy-MM-dd";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

		String convertedDate = simpleDateFormat.format(date1);

		return convertedDate;
	}

	public static String dateToExponentConverter(String reconvertDate) throws ParseException {

		Date reconvDate = new SimpleDateFormat("yyyy-MM-dd").parse(reconvertDate);
		String revPattern = "yyyyMMdd";
		SimpleDateFormat formattedDate = new SimpleDateFormat(revPattern);
		String formatDate = formattedDate.format(reconvDate);
		Double convLongValue = (Double.parseDouble(formatDate) * 10000000) / 10000000;
		String essConvDate = convLongValue.toString();

		return essConvDate;
	}

}

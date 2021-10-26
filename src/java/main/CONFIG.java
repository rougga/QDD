package main;

import java.text.SimpleDateFormat;

public class CONFIG {

    //MetaData
    public static final String APP_NAME = "QDD";
    public static final String APP_VERSION = "0.1";
    public static final String APP_COMPANY = "ROUGGA";
    public static final String APP_CLIENT = "NST";
    //Data files
    public static final String FILE_SCREENS = "/data/xml/screens.xml";
    public static final String FILE_SCREENCONTENT = "/data/xml/screenContent.xml";
    
    //Pages
    public static final String PAGE_HOME = "/QDD/index.jsp";
    public static final String PAGE_STYLE = "/QDD/style.jsp";
    public static final String PAGE_SCREEN = "/QDD/screen.jsp";
    
    //date format
    public static SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
    
}

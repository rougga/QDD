package ma.rougga.qdd.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;

@MultipartConfig(fileSizeThreshold = 1024 * 1024,
        maxFileSize = 1024 * 1024 * 5,
        maxRequestSize = 1024 * 1024 * 5 * 5)
public class MultipartServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {

        String uploadPath = getServletContext().getRealPath("") + File.separator + "uploaded";
        File uploadDir = new File(uploadPath);
        try {
            for (Part part : request.getParts()) {

                String fileName = getFileName(part);
                part.write(uploadPath + File.separator + fileName);
              
            }
        } catch (IOException | ServletException ex) {
            Logger.getLogger(MultipartServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private String getFileName(Part part) {
        for (String content : part.getHeader("content-disposition").split(";")) {
            if (content.trim().startsWith("filename")) {
                return content.substring(content.indexOf("=") + 2, content.length() - 1);
            }
        }
        return (new SimpleDateFormat("yyyyMMddhhmmss")).format(new Date()) + (new Random()).nextInt(100000);
    }

}

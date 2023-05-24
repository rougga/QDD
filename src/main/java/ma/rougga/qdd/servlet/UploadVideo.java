package ma.rougga.qdd.servlet;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import ma.rougga.qdd.CONFIG;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
public class UploadVideo extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {
        File file;
        int maxFileSize = 100000 * 1024;
        int maxMemSize = 100000 * 1024;
        String filePath = request.getServletContext().getRealPath(CONFIG.FOLDER_VIDEOUPLOAD);

        String contentType = request.getContentType();
        if ((contentType.indexOf("multipart/form-data") >= 0)) {

            DiskFileItemFactory factory = new DiskFileItemFactory();
            factory.setSizeThreshold(maxMemSize);
            factory.setRepository(new File(filePath));
            ServletFileUpload upload = new ServletFileUpload(factory);
            upload.setSizeMax(maxFileSize);

            try {
                List fileItems = upload.parseRequest(request);
                Iterator i = fileItems.iterator();
                while (i.hasNext()) {
                    FileItem fi = (FileItem) i.next();
                    if (!fi.isFormField()) {
                        String fieldName = fi.getFieldName();
                        String fileName = fi.getName();
                        boolean isInMemory = fi.isInMemory();
                        long sizeInBytes = fi.getSize();
                        file = new File(filePath + fileName);
                        fi.write(file);

                        System.out.println(fileName + " Updated");
                    }
                }
            } catch (Exception ex) {
                System.out.println(ex.getMessage());
            }
        } else {
            System.err.println("<p>No file uploaded</p>");
        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }
}

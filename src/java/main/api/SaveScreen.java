
package main.api;

import java.io.IOException;
import java.util.UUID;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import main.controller.ScreenController;
import org.apache.commons.lang3.StringUtils;

public class SaveScreen extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       String id = req.getParameter("id");
        String data = req.getParameter("data");
       if(StringUtils.isBlank(id)){
            System.out.println("id=" + id);
             System.out.println("data=" + data);
       }else{
        new ScreenController().saveScreenContent(req, UUID.fromString(id), data);
           System.out.println("Sadata= "+data);
       }
    }

}

package ma.rougga.qdd.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;
import ma.rougga.qdd.controller.ScreenController;
import org.apache.commons.lang3.StringUtils;
import org.xml.sax.SAXException;

public class LoadScreen extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        if (StringUtils.isBlank(id)) {
            // if id null
            System.out.println("main.api.LoadScreen.doGet()" + "  -  id = null");
        } else {
            try (PrintWriter out = resp.getWriter()) {
                //loading screen content as text
                out.println(new ScreenController().loadScreenContent(req, UUID.fromString(id)));
            } catch (ParserConfigurationException | SAXException ex) {
                Logger.getLogger(LoadScreen.class.getName()).log(Level.SEVERE, null, ex);
            }
        }

    }

}

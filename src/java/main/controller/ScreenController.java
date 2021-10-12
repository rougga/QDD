package main.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import javax.servlet.ServletRequest;
import javax.xml.parsers.ParserConfigurationException;
import main.CONFIG;
import main.modal.Screen;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class ScreenController {

    public ScreenController() {
    }

    public List<Screen> getAll(ServletRequest request) throws ParserConfigurationException, SAXException, IOException {
        List<Screen> screens = new ArrayList<>();
        Document doc = new XMLController().getXml(request.getServletContext().getRealPath(CONFIG.FILE_SCREENS));
        Node cibles = doc.getFirstChild();
        NodeList nList = cibles.getChildNodes();
        for (int i = 0; i < nList.getLength(); i++) {
            Node nNode = nList.item(i);
            if (nNode.getNodeType() == Node.ELEMENT_NODE) {
                Element eElement = (Element) nNode;
                Screen s = new Screen(
                        UUID.fromString(eElement.getElementsByTagName("id").item(0).getTextContent()),
                        eElement.getElementsByTagName("name").item(0).getTextContent(),
                        eElement.getElementsByTagName("creationDate").item(0).getTextContent()
                );
                screens.add(s);
            }

        }
        return screens;
    }

    public boolean addScreen(Screen s) {

        return false;
    }

    public boolean removeScreen(UUID id) {

        return false;
    }

}

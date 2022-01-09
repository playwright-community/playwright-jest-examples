import os
import xml.etree.ElementTree as ET

file_dir = os.path.abspath(os.path.dirname(__file__))
results_xml_fp = os.path.join(file_dir, 'junit.xml')

tree = ET.parse(results_xml_fp)
test_suites = tree.getroot()

for test_suite in test_suites:
    file_name = test_suite.attrib["name"]
    for test_case in test_suite:
        test_case.set("file", file_name)

tree.write(results_xml_fp)

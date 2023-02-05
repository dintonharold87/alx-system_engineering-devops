[![dinton harold](https://miro.medium.com/fit/c/96/96/0*Qf1cYzx8FS7IzyZv.jpg)

](https://medium.com/@dintonharold?source=post_page-----5ec6b4908af7--------------------------------)[dinton harold](https://medium.com/@dintonharold?source=post_page-----5ec6b4908af7--------------------------------)Follow

Feb 5

·3 min read

Incident Report / Post Mortem for Web Application Downtime Due to Database Malfunction
======================================================================================
<img src="https://drive.google.com/file/d/1NQr_fqRheW6GDUHTxy-ND8iR2LbBQVj9/view?usp=share_link">


Issue Summary
=============

On June 20th, 2019, ERP(Enterprise Resource Planning) system of the company where I was doing my internship experienced an unexpected outage for approximately three hours..and it was a wild and bumpy ride! During this time, the system was inaccessible to 100% users and the associated applications experienced significant latency. But don’t worry, our company’s ops team was on the case and fixed the issue as soon as possible.

Timeline
========

*   10:00 AM EAT: Users from the Finance team started reporting issues accessing the website and the associated applications. It was like trying to get into a popular nightclub without a VIP pass!
*   10:15 AM EAT: The IT team was notified of the issue and started investigating. The ops team sprang into action like superheroes ready to save the day!
*   11:00 AM EAT: The root cause was identified as a failure in one of the database servers. The database server was not responding to requests and caused the web server to become unresponsive. This was like trying to drive a car with a flat tire.
*   12:00 PM EAT: The database server was restarted, which resolved the issue and restored normal operations. It was like getting a fresh tire on your car and hitting the road again!
*   1:00 PM EAT: The team completed a thorough review of the incident and identified the corrective and preventative measures. This was like learning from your mistakes and making sure they don’t happen again!

Root Cause
==========

The root cause of the outage was identified as a failure in one of the database servers. The database server experienced a high CPU utilization, which caused it to become unresponsive. This was like a chef trying to cook for too many guests at once!

Corrective Measures
===================

*   Increase the database server’s capacity to handle increased load. This is like expanding the kitchen to handle more guests!
*   Implement automatic failover to prevent future outages caused by single points of failure. This is like having a backup chef to help during a busy night.
*   Implement real-time monitoring of the database server’s health to quickly identify and resolve issues. This is like having a sous chef to keep an eye on everything!
*   Schedule regular database server maintenance to prevent performance degradation. This is like a regularly scheduled deep cleaning of the kitchen to keep everything running smoothly.

Preventative Measures
=====================

*   Conduct regular load testing to identify potential performance issues and make necessary adjustments before they cause outages. This is like a trial run to see if the kitchen can handle a busy night.
*   Implement a disaster recovery plan to ensure rapid recovery from future outages. This is like having a fire extinguisher ready just in case.
*   Regularly review and update the system architecture to ensure it remains resilient and scalable. This is like re modelling the kitchen to keep up with changing trends and technology.
*   Provide regular training for the operations team to ensure they have the skills and knowledge necessary to quickly resolve incidents. This is like cooking classes for the chef to keep their skills sharp.

Conclusion
==========

The IT team takes the reliability and performance of the system and associated applications seriously. The team has implemented corrective and preventative measures to prevent future outages and ensure the system remains available and responsive for users. The team will continue to monitor the website and associated applications closely and make necessary improvements to ensure the best possible experience for users.

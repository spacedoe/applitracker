import { Flex, List, Paper, Stack, Text, Title } from "@mantine/core";
import React from "react";

export default function PoliciesDetails() {
  return (
    <Flex mx={16}>
      <Paper maw={848} my={16} shadow="xs" p="xl" withBorder mx="auto">
        <Stack>
          <Title c="var(--mantine-color-blue-filled)" id="terms-and-conditions">
            Terms and conditions
          </Title>
          <Text>
            This application is provided for demonstration purposes only. The
            services offered through Applitracker are for general illustrative and
            informational purposes and do not constitute professional advise. We
            expressly disclaim any liability for the accuracy, completeness, or
            reliability of the information shared or provided by the app.
          </Text>
          <Text>
            By using Applitracker, you acknowledge and agree that it is intended for
            demonstration only, and we make no representations or warranties of
            any kind, express or implied, about the suitability or availability
            of the services for any purpose.
          </Text>
          <Text>
            We do not accept any liability for data loss that may occur during
            the use of the app. 
          </Text>
          <Text>
            The reliability of this service, including but not limited to
            response times and the availability of features, is not guaranteed.
            We shall not be held liable for any direct, indirect, incidental,
            consequential, or any other damages arising out of or in connection
            with the use of the app.
          </Text>
          <Text>
            Please be aware that these Terms and Conditions are subject to
            change without prior notice.
          </Text>
        </Stack>

        <Stack mt={32}>
          <Title c="var(--mantine-color-blue-filled)" id="cookie-policy">
            Cookie Policy
          </Title>
          <Text>
            This website uses essential and functionality cookies to ensure the
            proper functioning and enhance your experience. By using our
            website, you consent to the use of the cookies in accordance with
            this Cookie Policy.
          </Text>
          <Title order={3}> What are Cookies?</Title>
          <Text>
            Cookies are small text files that are stored on your device when you
            visit a website. Essential cookies are necessary for the website to
            function properly, while functionality cookies enable enhanced
            features and personalization.
          </Text>
          <Title order={3}>How We Use Cookies?</Title>
          <List>
            <List.Item>
              <Title order={5}>Essential Cookies:</Title>
              <Text>
                These cookies are necessary for the website to function
                properly. They enable basic functionalities like page navigation
                and access to secure areas of the website.
              </Text>
            </List.Item>
            <List.Item>
              <Title order={5}>Functionality Cookies:</Title>
              <Text>
                These cookies enable enhanced features and personalization, such
                as remembering your preferences or login details.
              </Text>
            </List.Item>
          </List>
          <Title order={3}>Managing Cookies</Title>
          <Text>
            You can control and/or delete cookies as you wish. You can set your
            browser to block or alert you about these cookies, but some parts of
            the site may not function properly.
          </Text>
          <Title order={3}>Changes to This Policy</Title>
          <Text>
            We may update our Cookie Policy from time to time. Any changes will
            be posted on this page, and we encourage you to review this policy
            periodically for the latest information.
          </Text>
        </Stack>
      </Paper>
    </Flex>
  );
}

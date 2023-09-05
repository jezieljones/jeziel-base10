import { BadgeDelta, Card, Flex, Metric, ProgressBar, Text } from "@tremor/react";

const annualizedRevenue90 = 2700000
const annualizedQuota90 = 6400000

// Single KPI card in the demo dashboard with sample inputs
export default function KpiCard() {
  return (
    <Card className="max-w-lg mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>Past 90 days uploaded reports</Text>
          <Metric>$ 2,700,000</Metric>
        </div>
      </Flex>
      <Flex className="mt-4">
        <Text className="truncate">{Math.floor(annualizedRevenue90/annualizedQuota90 * 100)}% Achieved</Text>
        <Text>$ 6,400,000</Text>
      </Flex>
      <ProgressBar value={annualizedRevenue90/annualizedQuota90 * 100} className="mt-2" />
    </Card>
  );
}
/**
 * @fileoverview Sanskrit Dashboard
 *
 * stats:
 *  - total shlokas
 *  - total visitors
 * - total users
 * - total shlokas read
 * - total shlokas bookmarked
 * - total shlokas liked
 * - total shlokas commented
 * - total shlokas shared
 * - total shlokas translated
 * - total downloads
 * - total funds raised
 *
 * charts:
 * - shlokas read by month
 * - shlokas bookmarked by month
 * - shlokas liked by month
 * - shlokas commented by month
 * - shlokas shared by month
 * - shlokas translated by month
 * - downloads by month
 * - funds raised by month
 */

import Layout from '../src/components/layout';

import Stats from '../src/components/stats';
import Chart1 from '../src/components/charts/chart1';

export function Index() {
  return (
    <Layout>
      <div className="mx-auto min-h-screen max-w-7xl p-2">
        <Stats />
        <div className="h-[600px] w-full">
          <Chart1 />
        </div>
      </div>
    </Layout>
  );
}

export default Index;

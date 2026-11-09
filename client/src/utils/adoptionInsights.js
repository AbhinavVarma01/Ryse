export function getCustomerAdoption(customer) {
  return (customer.activeUsers / customer.totalRegisteredUsers) * 100;
}

export function getCustomerStatus(adoption) {
  if (adoption >= 75) return 'Healthy';
  if (adoption >= 40) return 'At Risk';
  return 'Critical';
}

export function buildInsights(customers, features, users) {
  const insights = [];
  customers.forEach((customer) => {
    const adoption = getCustomerAdoption(customer);
    const previous = (customer.previousMonthActiveUsers / customer.totalRegisteredUsers) * 100;
    if (adoption < 40) insights.push({ id: `critical-${customer.customerId}`, title: 'Critical adoption requires intervention', related: customer.companyName, problem: `${customer.companyName} has critically low adoption.`, evidence: `Only ${customer.activeUsers} of ${customer.totalRegisteredUsers} users are active (${adoption.toFixed(1)}%).`, severity: 'Critical', recommendation: 'Contact the customer champion and schedule a guided onboarding session.' });
    if (adoption < previous) insights.push({ id: `declining-${customer.customerId}`, title: 'Customer engagement is declining', related: customer.companyName, problem: `${customer.companyName} has declining engagement.`, evidence: `Active-user rate decreased by ${(previous - adoption).toFixed(1)} percentage points month over month.`, severity: 'High', recommendation: 'Contact the customer, review activation blockers, and monitor the next seven days.' });
    if (adoption > previous) insights.push({ id: `improving-${customer.customerId}`, title: 'Customer engagement is improving', related: customer.companyName, problem: `${customer.companyName} is building adoption momentum.`, evidence: `Active-user rate increased by ${(adoption - previous).toFixed(1)} percentage points month over month.`, severity: 'Positive', recommendation: 'Share advanced feature playbooks and expand usage to remaining users.' });
    if (customer.totalRegisteredUsers <= 3 && adoption < 75) insights.push({ id: `onboarding-${customer.customerId}`, title: 'Onboarding opportunity identified', related: customer.companyName, problem: 'A small customer workspace has not reached healthy adoption.', evidence: `${customer.totalRegisteredUsers} registered users and ${customer.activeUsers} active users create a focused activation opportunity.`, severity: 'Medium', recommendation: 'Offer a short onboarding workshop and invite inactive users to a first-use session.' });
  });
  features.filter((feature) => feature.usagePercentage < 50).forEach((feature) => insights.push({ id: `feature-${feature.featureId}`, title: 'Feature is underutilized', related: feature.featureName, problem: `${feature.featureName} has low adoption.`, evidence: `${feature.uniqueUsers} of ${users.length} users use this feature (${feature.usagePercentage.toFixed(1)}%).`, severity: 'Medium', recommendation: 'Add an in-product walkthrough and include this feature in customer enablement sessions.' }));
  return insights;
}

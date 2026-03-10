export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * Mocks sending an email message by waiting for a predefined time
 * and then resolving. You should replace this implementation with a 
 * real email service (like EmailJS, Resend, or a custom backend) in production.
 */
export const sendEmailMessage = async (data: EmailData): Promise<{ success: boolean; message?: string }> => {
  // Simulate network request delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Log to console for development purposes
  console.log("Simulating email send...");
  console.log("To: oinstitutocasa@gmail.com and CC:", data.email);
  console.log("Data:", data);

  // Return success
  return { success: true };
};

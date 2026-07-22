import jsPDF from "jspdf";
import type { PortfolioTransaction } from "@/entities/portfolio";

export function generateTransactionsPdf(transactions: PortfolioTransaction[]): void {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("Recent Transactions", 14, 20);

  doc.setFontSize(10);
  doc.setTextColor(100);

  const headers = ["Type", "Symbol", "Amount", "Date", "Status"];
  const columnWidths = [30, 30, 35, 40, 30];
  let startX = 14;
  let startY = 35;

  // Draw header
  doc.setFontSize(11);
  doc.setTextColor(50);
  headers.forEach((header, i) => {
    doc.text(header, startX, startY);
    startX += columnWidths[i];
  });

  // Draw separator line
  startY += 4;
  doc.setDrawColor(200);
  doc.line(14, startY, 14 + columnWidths.reduce((a, b) => a + b, 0), startY);

  // Draw rows
  doc.setFontSize(10);
  doc.setTextColor(60);
  startY += 8;

  transactions.forEach((tx, index) => {
    const rowY = startY + index * 8;

    // Check if we need a new page
    if (rowY > 280) {
      doc.addPage();
      startY = 20;
    }

    const rowData = [
      tx.type,
      tx.symbol,
      `$${tx.amount}`,
      tx.date,
      tx.status,
    ];

    let xPos = 14;
    rowData.forEach((cell, i) => {
      doc.text(String(cell), xPos, rowY);
      xPos += columnWidths[i];
    });
  });

  doc.save("recent-transactions.pdf");
}


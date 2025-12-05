import { test, expect } from '@playwright/test';

test('홈페이지가 정상적으로 로드되는지 확인', async ({ page }) => {
  await page.goto('/');
  
  // 페이지 제목 확인
  await expect(page).toHaveTitle(/Funeral Service Website Design/);
  
  // 헤더가 표시되는지 확인
  const header = page.locator('header');
  await expect(header).toBeVisible();
  
  // 헤더 내 로고가 표시되는지 확인 (더 구체적으로 선택)
  const logo = header.getByText('평안상조').first();
  await expect(logo).toBeVisible();
});

test('로그인 버튼이 표시되는지 확인', async ({ page }) => {
  await page.goto('/');
  
  // 로그인 버튼 확인
  const loginButton = page.getByRole('button', { name: /로그인/ });
  await expect(loginButton).toBeVisible();
});

test('문의하기 섹션이 표시되는지 확인', async ({ page }) => {
  await page.goto('/');
  
  // 문의하기 섹션으로 이동 (ID로 직접 접근)
  await page.goto('/#contact');
  await page.waitForLoadState('networkidle');
  
  // 문의 폼 확인
  const contactForm = page.locator('#contact form');
  await expect(contactForm).toBeVisible();
  
  // 이름 입력 필드 확인
  const nameInput = page.getByLabel('이름');
  await expect(nameInput).toBeVisible();
  
  // 전화번호 입력 필드 확인
  const phoneInput = page.getByLabel('연락처');
  await expect(phoneInput).toBeVisible();
  
  // 이메일 입력 필드 확인
  const emailInput = page.getByLabel('이메일');
  await expect(emailInput).toBeVisible();
  
  // 문의 내용 입력 필드 확인
  const messageInput = page.getByLabel('문의 내용');
  await expect(messageInput).toBeVisible();
});

